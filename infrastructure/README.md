# RescueNet360 Marketing Infrastructure

Terraform-managed AWS infrastructure for the marketing site.

## Overview

- **Modules**: Reusable Terraform modules
  - `frontend-hosting`: S3 + CloudFront + OAC
  - `waitlist-api`: API Gateway + Lambda + DynamoDB
- **Environments**: Environment-specific configurations
  - `prod`: Production environment

## Quick Start

### Prerequisites

- Terraform 1.5+
- AWS CLI configured with credentials
- AWS account

### Initial Deployment

```bash
# Navigate to production environment
cd environments/prod

# Copy example variables
cp terraform.tfvars.example terraform.tfvars

# Edit terraform.tfvars with your settings
# (Most defaults are fine for initial deployment)

# Initialize Terraform
terraform init

# Preview changes
terraform plan

# Deploy infrastructure
terraform apply

# Save outputs
terraform output > outputs.txt
```

### Get Deployment Information

```bash
# Get website URL
terraform output website_url

# Get API endpoint (for frontend .env.local)
terraform output api_endpoint

# Get deployment instructions
terraform output deployment_instructions
```

## Project Structure

```
infrastructure/
├── modules/
│   ├── frontend-hosting/    # S3 + CloudFront module
│   └── waitlist-api/         # API Gateway + Lambda + DynamoDB module
└── environments/
    └── prod/
        ├── main.tf           # Module composition
        ├── variables.tf      # Input variables
        ├── outputs.tf        # Output values
        └── terraform.tfvars  # Environment values (gitignored)
```

## AWS Resources Created

### Frontend Hosting
- S3 bucket (private)
- CloudFront distribution
- CloudFront Origin Access Control (OAC)
- ACM certificate (if custom domain enabled)
- Route53 A record (if custom domain + Route53)

### Waitlist API
- DynamoDB table
- Lambda function
- API Gateway HTTP API
- IAM roles and policies
- CloudWatch log groups

## Cost Estimate

**Monthly costs (low traffic)**:
- S3: ~$0.50
- CloudFront: ~$1-2
- DynamoDB: ~$0.25
- Lambda: ~$0.20
- API Gateway: ~$1
- **Total: ~$3-5/month**

Set up billing alerts:
```bash
aws cloudwatch put-metric-alarm \
  --alarm-name marketing-site-budget \
  --alarm-description "Alert if costs exceed $10" \
  --metric-name EstimatedCharges \
  --namespace AWS/Billing \
  --statistic Maximum \
  --period 21600 \
  --evaluation-periods 1 \
  --threshold 10 \
  --comparison-operator GreaterThanThreshold
```

## Custom Domain Setup

1. Update `terraform.tfvars`:
   ```hcl
   enable_custom_domain = true
   custom_domain        = "rescuenet360.com"
   route53_zone_id      = "Z..." # Optional
   ```

2. Apply Terraform:
   ```bash
   terraform apply
   ```

3. Validate ACM certificate:
   - Go to AWS Console → Certificate Manager (us-east-1)
   - Copy CNAME record
   - Add to your DNS provider
   - Wait for validation (~5-30 minutes)

4. If not using Route53, create DNS A record:
   - Point to CloudFront domain (from `terraform output`)

## Updating Infrastructure

```bash
# Pull latest changes
git pull

# Plan changes
terraform plan

# Apply changes
terraform apply
```

## Destroying Infrastructure

⚠️ **WARNING**: This will delete all resources and data.

```bash
terraform destroy
```

## Troubleshooting

### Terraform State Issues

If you encounter state lock issues:

```bash
# List state resources
terraform state list

# Remove specific resource (if needed)
terraform state rm <resource>
```

### CloudFront Cache Issues

If changes aren't visible:

```bash
# Invalidate cache
aws cloudfront create-invalidation \
  --distribution-id $(terraform output -raw cloudfront_distribution_id) \
  --paths "/*"
```

### Lambda Function Updates

If Lambda code changes aren't applied:

```bash
# Taint Lambda function to force recreation
terraform taint module.waitlist_api.aws_lambda_function.waitlist

# Apply
terraform apply
```

## Security Best Practices

- Never commit `terraform.tfvars` (gitignored)
- Store Terraform state remotely (S3 + DynamoDB locking)
- Use least-privilege IAM policies
- Enable CloudTrail for audit logs
- Review security groups and policies regularly

## Remote State (Optional)

To use S3 backend for remote state:

1. Create S3 bucket and DynamoDB table:
   ```bash
   aws s3 mb s3://rescuenet360-terraform-state
   aws dynamodb create-table \
     --table-name terraform-locks \
     --attribute-definitions AttributeName=LockID,AttributeType=S \
     --key-schema AttributeName=LockID,KeyType=HASH \
     --billing-mode PAY_PER_REQUEST
   ```

2. Uncomment backend configuration in `main.tf`

3. Re-initialize:
   ```bash
   terraform init -migrate-state
   ```

## Adding New Environments

To create staging/dev environments:

```bash
# Copy prod environment
cp -r environments/prod environments/staging

# Update variables in environments/staging/terraform.tfvars
# Change environment = "staging"
# Change project_name or add environment suffix

# Deploy
cd environments/staging
terraform init
terraform apply
```

## Support

For infrastructure issues:
1. Check Terraform docs: https://registry.terraform.io/providers/hashicorp/aws/latest/docs
2. Review AWS service health: https://health.aws.amazon.com/
3. Check CloudWatch logs for Lambda/API Gateway errors
