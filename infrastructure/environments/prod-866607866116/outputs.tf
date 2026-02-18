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

# Deployment Instructions
output "deployment_instructions" {
  description = "Instructions for deploying the frontend"
  value = <<-EOT

  ========================================
  RescueNet360 Marketing Site - Deployment
  ========================================

  1. Build Frontend:
     npm run build

  2. Deploy to S3:
     aws s3 sync dist/ s3://${module.frontend_hosting.s3_bucket_name}/ --delete \
       --cache-control "public,max-age=31536000,immutable" --exclude "index.html"

     aws s3 cp dist/index.html s3://${module.frontend_hosting.s3_bucket_name}/index.html \
       --cache-control "public,max-age=0,must-revalidate"

  3. Invalidate CloudFront Cache:
     aws cloudfront create-invalidation \
       --distribution-id ${module.frontend_hosting.cloudfront_distribution_id} \
       --paths "/*"

  4. Visit Your Site:
     ${module.frontend_hosting.website_url}

  ========================================
  EOT
}
