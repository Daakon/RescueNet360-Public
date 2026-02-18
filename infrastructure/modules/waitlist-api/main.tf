# Waitlist API Module
# API Gateway HTTP API + Lambda + DynamoDB for waitlist submissions

terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
    archive = {
      source = "hashicorp/archive"
    }
  }
}

locals {
  function_name = "${var.project_name}-${var.environment}-waitlist"
  table_name    = "${var.project_name}-${var.environment}-waitlist"
}

# DynamoDB Table for storing waitlist emails
resource "aws_dynamodb_table" "waitlist" {
  name         = local.table_name
  billing_mode = "PAY_PER_REQUEST" # On-demand billing
  hash_key     = "email"
  range_key    = "timestamp"

  attribute {
    name = "email"
    type = "S"
  }

  attribute {
    name = "timestamp"
    type = "S"
  }

  point_in_time_recovery {
    enabled = true
  }

  tags = {
    Name        = local.table_name
    Environment = var.environment
    Project     = var.project_name
  }
}

# IAM Role for Lambda
resource "aws_iam_role" "lambda" {
  name = "${local.function_name}-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })

  tags = {
    Name        = "${local.function_name}-role"
    Environment = var.environment
    Project     = var.project_name
  }
}

# IAM Policy for Lambda - DynamoDB access
resource "aws_iam_role_policy" "lambda_dynamodb" {
  name = "${local.function_name}-dynamodb-policy"
  role = aws_iam_role.lambda.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "dynamodb:PutItem"
        ]
        Resource = aws_dynamodb_table.waitlist.arn
      }
    ]
  })
}

# IAM Policy for Lambda - CloudWatch Logs
resource "aws_iam_role_policy_attachment" "lambda_logs" {
  role       = aws_iam_role.lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# CloudWatch Log Group for Lambda
resource "aws_cloudwatch_log_group" "lambda" {
  name              = "/aws/lambda/${local.function_name}"
  retention_in_days = 30

  tags = {
    Name        = "${local.function_name}-logs"
    Environment = var.environment
    Project     = var.project_name
  }
}

# Package Lambda function
data "archive_file" "lambda" {
  type        = "zip"
  source_dir  = "${path.module}/lambda"
  output_path = "${path.module}/lambda.zip"
  excludes    = ["package-lock.json", "node_modules"]
}

# Lambda Function
resource "aws_lambda_function" "waitlist" {
  filename         = data.archive_file.lambda.output_path
  function_name    = local.function_name
  role            = aws_iam_role.lambda.arn
  handler         = "index.handler"
  source_code_hash = data.archive_file.lambda.output_base64sha256
  runtime         = "nodejs20.x"
  timeout         = 10
  memory_size     = 256

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.waitlist.name
    }
  }

  depends_on = [
    aws_cloudwatch_log_group.lambda,
    aws_iam_role_policy.lambda_dynamodb,
    aws_iam_role_policy_attachment.lambda_logs
  ]

  tags = {
    Name        = local.function_name
    Environment = var.environment
    Project     = var.project_name
  }
}

# API Gateway HTTP API
resource "aws_apigatewayv2_api" "waitlist" {
  name          = "${var.project_name}-${var.environment}-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["*"] # Update with specific domain in production
    allow_methods = ["POST", "OPTIONS"]
    allow_headers = ["Content-Type"]
    max_age       = 300
  }

  tags = {
    Name        = "${var.project_name}-${var.environment}-api"
    Environment = var.environment
    Project     = var.project_name
  }
}

# API Gateway Integration with Lambda
resource "aws_apigatewayv2_integration" "lambda" {
  api_id             = aws_apigatewayv2_api.waitlist.id
  integration_type   = "AWS_PROXY"
  integration_uri    = aws_lambda_function.waitlist.invoke_arn
  integration_method = "POST"
  payload_format_version = "2.0"
}

# API Gateway Route - POST /waitlist
resource "aws_apigatewayv2_route" "waitlist_post" {
  api_id    = aws_apigatewayv2_api.waitlist.id
  route_key = "POST /waitlist"
  target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
}

# API Gateway Route - OPTIONS /waitlist (for CORS)
resource "aws_apigatewayv2_route" "waitlist_options" {
  api_id    = aws_apigatewayv2_api.waitlist.id
  route_key = "OPTIONS /waitlist"
  target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
}

# API Gateway Stage
resource "aws_apigatewayv2_stage" "default" {
  api_id      = aws_apigatewayv2_api.waitlist.id
  name        = "$default"
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.api.arn
    format = jsonencode({
      requestId      = "$context.requestId"
      ip             = "$context.identity.sourceIp"
      requestTime    = "$context.requestTime"
      httpMethod     = "$context.httpMethod"
      routeKey       = "$context.routeKey"
      status         = "$context.status"
      protocol       = "$context.protocol"
      responseLength = "$context.responseLength"
    })
  }

  default_route_settings {
    throttling_burst_limit = 100
    throttling_rate_limit  = 10
  }

  tags = {
    Name        = "${var.project_name}-${var.environment}-api-stage"
    Environment = var.environment
    Project     = var.project_name
  }
}

# CloudWatch Log Group for API Gateway
resource "aws_cloudwatch_log_group" "api" {
  name              = "/aws/apigateway/${var.project_name}-${var.environment}"
  retention_in_days = 30

  tags = {
    Name        = "${var.project_name}-${var.environment}-api-logs"
    Environment = var.environment
    Project     = var.project_name
  }
}

# Lambda Permission for API Gateway
resource "aws_lambda_permission" "api_gateway" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.waitlist.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.waitlist.execution_arn}/*/*"
}
