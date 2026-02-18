# GitHub Actions Workflows

Automated CI/CD pipelines for the RescueNet360 marketing site.

## Workflows

### Deploy Frontend (`deploy-frontend.yml`)

**Trigger**: Push to `main` branch (changes in `frontend/`)

**Steps**:
1. Checkout code
2. Setup Node.js 20
3. Install dependencies
4. Build frontend
5. Deploy to S3
6. Invalidate CloudFront cache

**Required Secrets**:
- `AWS_ACCESS_KEY_ID` - AWS access key
- `AWS_SECRET_ACCESS_KEY` - AWS secret key
- `S3_BUCKET` - S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID` - CloudFront distribution ID

### Deploy Infrastructure (`deploy-infrastructure.yml`)

**Trigger**: Push to `main` branch (changes in `infrastructure/`)

**Steps**:
1. Checkout code
2. Setup Terraform
3. Format check
4. Init, validate, plan
5. Apply (on main branch only)

**Required Secrets**:
- `AWS_ACCESS_KEY_ID` - AWS access key
- `AWS_SECRET_ACCESS_KEY` - AWS secret key

## Setting Up GitHub Secrets

1. Go to repository Settings → Secrets and variables → Actions
2. Add the following secrets:

### Get Values from Terraform

```bash
cd infrastructure/environments/prod-866607866116
terraform output
```

### Required Secrets

| Secret | Description | How to Get |
|--------|-------------|------------|
| `AWS_ACCESS_KEY_ID` | AWS access key | AWS IAM console |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key | AWS IAM console |
| `S3_BUCKET` | S3 bucket name | `terraform output s3_bucket_name` |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID | `terraform output cloudfront_distribution_id` |

## Manual Deployment

You can trigger deployments manually:

1. Go to Actions tab
2. Select workflow (Deploy Frontend or Deploy Infrastructure)
3. Click "Run workflow"
4. Select branch (usually `main`)
5. Click "Run workflow"

## Workflow Status

Check workflow status in the Actions tab or via badge:

```markdown
![Deploy Frontend](https://github.com/YOUR_USERNAME/RescueNet360-Public/workflows/Deploy%20Frontend/badge.svg)
```

## Troubleshooting

### Workflow Fails with AWS Credentials Error

- Verify secrets are set correctly
- Check IAM user has required permissions:
  - S3: `PutObject`, `DeleteObject`, `ListBucket`
  - CloudFront: `CreateInvalidation`, `GetDistribution`
  - Terraform: Full access or specific resource permissions

### Build Fails

- Check Node.js version matches (20.x)
- Verify `package-lock.json` is committed
- Check for environment variable issues

### Terraform Apply Fails

- Review plan output in logs
- Check for state lock issues
- Verify Terraform version compatibility

## Best Practices

1. **Never commit secrets** - Use GitHub Secrets
2. **Test locally first** - Run `npm run build` and `terraform plan` locally
3. **Review PR checks** - Ensure all checks pass before merging
4. **Monitor deployments** - Check Actions tab after merge
5. **Rollback if needed** - Use `terraform apply` with previous version
