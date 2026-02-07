output "api_endpoint" {
  description = "API Gateway endpoint URL"
  value       = aws_apigatewayv2_api.waitlist.api_endpoint
}

output "table_name" {
  description = "DynamoDB table name"
  value       = aws_dynamodb_table.waitlist.name
}

output "table_arn" {
  description = "DynamoDB table ARN"
  value       = aws_dynamodb_table.waitlist.arn
}

output "lambda_function_name" {
  description = "Lambda function name"
  value       = aws_lambda_function.waitlist.function_name
}

output "lambda_function_arn" {
  description = "Lambda function ARN"
  value       = aws_lambda_function.waitlist.arn
}
