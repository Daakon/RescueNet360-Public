# Frontend Hosting Module

Terraform module for static site hosting with S3 + CloudFront + OAC.

## Resources Created

- **S3 Bucket**: Private bucket for static assets
- **CloudFront Distribution**: Global CDN with compression
- **Origin Access Control (OAC)**: Secure S3 access from CloudFront
- **ACM Certificate**: SSL/TLS certificate (optional, for custom domain)
- **Route53 Record**: DNS A record (optional, if using Route53)

## Usage

### With CloudFront Default Domain

```hcl
module "frontend_hosting" {
  source = "../../modules/frontend-hosting"

  environment  = "prod"
  project_name = "rescuenet360-marketing"
}
```

### With Custom Domain

```hcl
module "frontend_hosting" {
  source = "../../modules/frontend-hosting"

  environment          = "prod"
  project_name         = "rescuenet360-marketing"
  enable_custom_domain = true
  custom_domain        = "rescuenet360.com"
  route53_zone_id      = "Z1234567890ABC" # Optional
}
```

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|----------|
| environment | Environment name | string | - | yes |
| project_name | Project name | string | - | yes |
| enable_custom_domain | Enable custom domain | bool | false | no |
| custom_domain | Custom domain name | string | "" | no |
| route53_zone_id | Route53 zone ID | string | "" | no |

## Outputs

| Name | Description |
|------|-------------|
| s3_bucket_name | S3 bucket name |
| cloudfront_distribution_id | CloudFront distribution ID |
| cloudfront_domain | CloudFront domain name |
| website_url | Complete website URL |

## Cache Configuration

- **Assets** (`/assets/*`): 1 year cache, immutable
- **HTML** (`/index.html`): No cache (always fresh)
- **Default**: 5 minute cache

## Security Features

- S3 bucket is private (no public access)
- CloudFront uses OAC (not deprecated OAI)
- HTTPS enforced (HTTP redirects to HTTPS)
- TLS 1.2+ minimum protocol
- Versioning enabled with 30-day retention

## SPA Routing

- 404/403 errors redirect to `/index.html`
- Supports client-side routing (React Router)

## Custom Domain Setup

1. Set `enable_custom_domain = true`
2. Specify `custom_domain`
3. After Terraform apply, validate ACM certificate:
   - Go to AWS Console → Certificate Manager
   - Copy CNAME record
   - Add CNAME to your DNS provider
4. Wait for certificate validation (~5-30 minutes)
5. If using Route53, provide `route53_zone_id`

## Deployment

Upload files to S3:

```bash
aws s3 sync dist/ s3://<bucket-name>/ --delete
aws cloudfront create-invalidation --distribution-id <id> --paths "/*"
```

## Cost Estimate

- S3: ~$0.50/month (storage + requests)
- CloudFront: ~$1-2/month (first 1TB free tier)
- ACM Certificate: Free
- **Total: ~$1.50-2.50/month** (low traffic)
