# Frontend Hosting Outputs
output "website_url" {
  description = "Website URL (custom domain or CloudFront)"
  value       = module.frontend_hosting.website_url
}

output "cloudfront_domain" {
  description = "CloudFront distribution domain"
  value       = module.frontend_hosting.cloudfront_domain
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (needed for cache invalidation)"
  value       = module.frontend_hosting.cloudfront_distribution_id
}

output "s3_bucket_name" {
  description = "S3 bucket name for frontend files"
  value       = module.frontend_hosting.s3_bucket_name
}

# Waitlist API Outputs
output "api_endpoint" {
  description = "Waitlist API endpoint URL"
  value       = module.waitlist_api.api_endpoint
}

output "dynamodb_table_name" {
  description = "DynamoDB table name for waitlist"
  value       = module.waitlist_api.table_name
}

output "lambda_function_name" {
  description = "Lambda function name for waitlist"
  value       = module.waitlist_api.lambda_function_name
}

# Deployment Instructions
output "deployment_instructions" {
  description = "Instructions for deploying the frontend"
  value = <<-EOT

  ========================================
  RescueNet360 Marketing Site - Deployment
  ========================================

  1. Update Frontend Environment Variables:
     cd frontend
     echo "VITE_API_ENDPOINT=${module.waitlist_api.api_endpoint}" > .env.local

  2. Build Frontend:
     npm run build

  3. Deploy to S3:
     aws s3 sync dist/ s3://${module.frontend_hosting.s3_bucket_name}/ --delete \
       --cache-control "public,max-age=31536000,immutable" --exclude "index.html"

     aws s3 cp dist/index.html s3://${module.frontend_hosting.s3_bucket_name}/index.html \
       --cache-control "public,max-age=0,must-revalidate"

  4. Invalidate CloudFront Cache:
     aws cloudfront create-invalidation \
       --distribution-id ${module.frontend_hosting.cloudfront_distribution_id} \
       --paths "/*"

  5. Visit Your Site:
     ${module.frontend_hosting.website_url}

  ========================================
  EOT
}
