# RescueNet360 Marketing Site - Deployment Guide

Complete guide for deploying and maintaining the RescueNet360 marketing site.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Infrastructure Deployment](#infrastructure-deployment)
4. [Frontend Deployment](#frontend-deployment)
5. [Custom Domain Setup](#custom-domain-setup)
6. [CI/CD Setup](#cicd-setup)
7. [Troubleshooting](#troubleshooting)
8. [Maintenance](#maintenance)

## Prerequisites

### Required Tools

```bash
# Node.js 20.x
node --version  # Should be v20.x

# npm
npm --version   # Should be 10.x

# Terraform 1.5+
terraform --version  # Should be 1.5+

# AWS CLI 2.x
aws --version   # Should be 2.x

# Git
git --version
```

### Install Tools

**Node.js**:
- Download from https://nodejs.org/
- Or use nvm: `nvm install 20 && nvm use 20`

**Terraform**:
- Download from https://terraform.io/downloads
- Or use package manager: `brew install terraform` (Mac) or `choco install terraform` (Windows)

**AWS CLI**:
- Download from https://aws.amazon.com/cli/
- Configure: `aws configure`

### AWS Account Requirements

- Active AWS account
- IAM user with permissions:
  - S3: Full access
  - CloudFront: Full access
  - Lambda: Full access
  - API Gateway: Full access
  - DynamoDB: Full access
  - ACM: Full access (for custom domain)
  - IAM: Create/manage roles
  - CloudWatch: Logs access

## Initial Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd RescueNet360-Public
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

### 3. Configure AWS Credentials

```bash
aws configure
# Enter:
# - AWS Access Key ID
# - AWS Secret Access Key
# - Default region: us-east-1
# - Default output format: json
```

Verify:
```bash
aws sts get-caller-identity
```

## Infrastructure Deployment

### Step 1: Initialize Terraform

```bash
cd infrastructure/environments/prod

# Copy example variables
cp terraform.tfvars.example terraform.tfvars

# Edit terraform.tfvars (optional - defaults work for initial deployment)
# For now, leave custom domain settings as false
```

### Step 2: Review and Deploy

```bash
# Initialize Terraform
terraform init

# Review planned changes
terraform plan

# Deploy infrastructure (confirm with 'yes' when prompted)
terraform apply
```

**Expected Duration**: 5-10 minutes

### Step 3: Save Outputs

```bash
# Display all outputs
terraform output

# Save specific outputs for later use
export API_ENDPOINT=$(terraform output -raw api_endpoint)
export S3_BUCKET=$(terraform output -raw s3_bucket_name)
export CLOUDFRONT_ID=$(terraform output -raw cloudfront_distribution_id)
export WEBSITE_URL=$(terraform output -raw website_url)

# Save to file
terraform output > outputs.txt
```

### Step 4: Verify Infrastructure

```bash
# Check S3 bucket exists
aws s3 ls | grep $S3_BUCKET

# Check CloudFront distribution
aws cloudfront get-distribution --id $CLOUDFRONT_ID

# Check API Gateway
curl -X POST $API_ENDPOINT/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Should return: {"message":"Successfully subscribed","email":"test@example.com"}
```

## Frontend Deployment

### Step 1: Configure Environment

```bash
cd ../../../frontend  # From infrastructure/environments/prod

# Create .env.local with API endpoint
echo "VITE_API_ENDPOINT=$API_ENDPOINT" > .env.local

# Verify
cat .env.local
```

### Step 2: Build Frontend

```bash
# Install dependencies (if not already done)
npm install

# Build for production
npm run build

# Verify build
ls -la dist/
```

### Step 3: Deploy to S3

**Option A: Using Deploy Script** (Recommended)

```bash
cd ..  # Back to project root
chmod +x scripts/deploy-frontend.sh
./scripts/deploy-frontend.sh $S3_BUCKET $CLOUDFRONT_ID
```

**Option B: Manual Deployment**

```bash
cd frontend

# Upload all files except index.html with long cache
aws s3 sync dist/ s3://$S3_BUCKET/ --delete \
  --cache-control "public,max-age=31536000,immutable" \
  --exclude "index.html"

# Upload index.html with no cache
aws s3 cp dist/index.html s3://$S3_BUCKET/index.html \
  --cache-control "public,max-age=0,must-revalidate"

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id $CLOUDFRONT_ID \
  --paths "/*"
```

### Step 4: Verify Deployment

```bash
# Get CloudFront URL
echo $WEBSITE_URL

# Open in browser or curl
curl -I $WEBSITE_URL

# Should see:
# HTTP/2 200
# content-type: text/html
```

Visit the URL in your browser and verify:
- Site loads correctly
- All sections render
- Waitlist form works (submit test email)

### Step 5: Verify Waitlist Data

```bash
# Check DynamoDB table
aws dynamodb scan --table-name rescuenet360-marketing-prod-waitlist

# Should see your test email submission
```

## Custom Domain Setup

### Prerequisites

- Own a domain (e.g., rescuenet360.com)
- Access to DNS management

### Step 1: Update Terraform Variables

```bash
cd infrastructure/environments/prod

# Edit terraform.tfvars
nano terraform.tfvars

# Update these lines:
enable_custom_domain = true
custom_domain        = "rescuenet360.com"  # Your domain
# route53_zone_id    = "Z..."  # Optional: only if using Route53
```

### Step 2: Deploy Infrastructure

```bash
terraform apply
```

Terraform will create:
- ACM certificate in us-east-1
- CloudFront distribution with custom domain

### Step 3: Validate ACM Certificate

**Method A: AWS Console** (Easiest)

1. Go to AWS Console → Certificate Manager (us-east-1 region)
2. Find your certificate
3. Copy CNAME record name and value
4. Add CNAME record to your DNS provider
5. Wait for validation (5-30 minutes)

**Method B: CLI**

```bash
# Get certificate ARN
CERT_ARN=$(aws acm list-certificates --region us-east-1 \
  --query "CertificateSummaryList[?DomainName=='rescuenet360.com'].CertificateArn" \
  --output text)

# Get validation records
aws acm describe-certificate --region us-east-1 \
  --certificate-arn $CERT_ARN \
  --query "Certificate.DomainValidationOptions[0].ResourceRecord"

# Add this CNAME to your DNS
```

### Step 4: Add DNS A Record

**If using Route53**: Terraform already created the A record.

**If using external DNS**:

1. Get CloudFront domain:
   ```bash
   terraform output cloudfront_domain
   ```

2. Create A record (or CNAME) in your DNS:
   - Type: A (alias) or CNAME
   - Name: @ (root domain) or www
   - Value: CloudFront domain from above
   - TTL: 300 seconds

### Step 5: Verify Custom Domain

```bash
# Wait for DNS propagation (1-24 hours)
# Check DNS
nslookup rescuenet360.com

# Test HTTPS
curl -I https://rescuenet360.com

# Should return 200 OK
```

## CI/CD Setup

### GitHub Actions Setup

### Step 1: Add GitHub Secrets

1. Go to GitHub repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add the following secrets:

| Secret Name | Value | How to Get |
|-------------|-------|------------|
| `AWS_ACCESS_KEY_ID` | Your AWS access key | AWS IAM Console |
| `AWS_SECRET_ACCESS_KEY` | Your AWS secret key | AWS IAM Console |
| `S3_BUCKET` | S3 bucket name | `terraform output s3_bucket_name` |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID | `terraform output cloudfront_distribution_id` |
| `API_ENDPOINT` | API Gateway endpoint | `terraform output api_endpoint` |

### Step 2: Test Workflows

**Test Frontend Deployment**:

```bash
# Make a small change to frontend
cd frontend/src
echo "// Test change" >> App.jsx

# Commit and push
git add .
git commit -m "Test: CI/CD workflow"
git push origin main
```

**Monitor Workflow**:

1. Go to GitHub → Actions tab
2. Watch "Deploy Frontend" workflow
3. Verify deployment succeeds

**Test Infrastructure Deployment**:

```bash
# Make a comment change to Terraform
cd infrastructure/environments/prod
echo "# Test change" >> main.tf

# Commit and push
git add .
git commit -m "Test: Infrastructure CI/CD"
git push origin main
```

Watch "Deploy Infrastructure" workflow in Actions tab.

### Step 3: Manual Trigger

You can manually trigger workflows:

1. Go to Actions tab
2. Select workflow
3. Click "Run workflow"
4. Choose branch
5. Click "Run workflow"

## Troubleshooting

### Infrastructure Issues

#### Terraform Apply Fails

**Error**: "Error creating S3 bucket: BucketAlreadyExists"

**Solution**:
```bash
# Bucket names must be globally unique
# Edit terraform.tfvars and change project_name
project_name = "rescuenet360-marketing-yourname"
```

**Error**: "Error creating Lambda: InvalidParameterValueException"

**Solution**:
```bash
# Lambda dependencies not installed
cd infrastructure/modules/waitlist-api/lambda
npm install
cd ../../..
terraform apply
```

**Error**: "State lock error"

**Solution**:
```bash
# Force unlock (use carefully)
terraform force-unlock <lock-id>
```

### Frontend Deployment Issues

#### Build Fails

**Error**: "Module not found"

**Solution**:
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error**: "VITE_API_ENDPOINT is not defined"

**Solution**:
```bash
# Ensure .env.local exists
echo "VITE_API_ENDPOINT=<your-api-endpoint>" > .env.local
npm run build
```

#### S3 Upload Fails

**Error**: "Access Denied"

**Solution**:
```bash
# Check AWS credentials
aws sts get-caller-identity

# Verify bucket name
aws s3 ls | grep <bucket-name>

# Check IAM permissions (need s3:PutObject)
```

### CloudFront Issues

#### Changes Not Visible

**Solution**:
```bash
# Invalidate cache
aws cloudfront create-invalidation \
  --distribution-id <distribution-id> \
  --paths "/*"

# Wait 1-2 minutes, then hard refresh browser (Ctrl+Shift+R)
```

#### 403 Forbidden Error

**Solution**:
- Check S3 bucket policy allows CloudFront OAC
- Verify CloudFront distribution status is "Deployed"
- Check index.html exists in S3 bucket

### API Gateway Issues

#### CORS Errors

**Solution**:
```bash
# Update Lambda CORS headers
# Edit infrastructure/modules/waitlist-api/lambda/index.js
# Change Access-Control-Allow-Origin from * to your domain

terraform apply  # Redeploy Lambda
```

#### 500 Internal Server Error

**Solution**:
```bash
# Check Lambda logs
aws logs tail /aws/lambda/rescuenet360-marketing-prod-waitlist --follow

# Common issues:
# - TABLE_NAME environment variable not set
# - DynamoDB permissions missing
# - Invalid email format
```

### Custom Domain Issues

#### Certificate Validation Pending

**Solution**:
- Verify CNAME record is added to DNS
- Check record name/value match exactly
- Wait up to 30 minutes for validation
- Check certificate status in ACM console

#### DNS Not Resolving

**Solution**:
```bash
# Check DNS propagation
dig rescuenet360.com

# Wait up to 24 hours for global propagation
# Use DNS checker: https://dnschecker.org/
```

## Maintenance

### Regular Tasks

**Weekly**:
- Check CloudWatch logs for errors
- Monitor waitlist submissions in DynamoDB

**Monthly**:
- Review AWS costs in billing dashboard
- Update npm dependencies:
  ```bash
  cd frontend
  npm update
  npm audit fix
  ```
- Update Terraform providers:
  ```bash
  cd infrastructure/environments/prod
  terraform init -upgrade
  ```

**Quarterly**:
- Review security advisories
- Test disaster recovery procedure
- Review and optimize costs

### Updating Content

**Update Text**:
1. Edit section components in `frontend/src/components/sections/`
2. Commit changes
3. Push to GitHub (triggers auto-deploy)

**Update Images**:
1. Optimize images (<200KB each)
2. Place in `frontend/public/images/`
3. Update image paths in components
4. Commit and push

### Adding New Pages

1. Create new component in `frontend/src/components/pages/`
2. Add route in `frontend/src/App.jsx`
3. Update navigation in `frontend/src/utils/constants.js`
4. Deploy (no infrastructure changes needed)

### Scaling Up

**When traffic increases**:

1. **Enable CloudFront WAF** (>10k visitors/day):
   ```hcl
   # Add to frontend-hosting module
   web_acl_id = aws_wafv2_web_acl.main.arn
   ```

2. **Switch DynamoDB to Provisioned** (>1M writes/month):
   ```hcl
   billing_mode = "PROVISIONED"
   read_capacity = 5
   write_capacity = 5
   ```

3. **Add Auto-Scaling** (DynamoDB):
   ```hcl
   resource "aws_appautoscaling_target" "dynamodb_table_read" {
     # Auto-scaling configuration
   }
   ```

### Backup & Recovery

**Backup Terraform State**:
```bash
cd infrastructure/environments/prod
cp terraform.tfstate terraform.tfstate.backup.$(date +%Y%m%d)
```

**Restore DynamoDB Data**:
```bash
# Point-in-time recovery (up to 35 days)
aws dynamodb restore-table-to-point-in-time \
  --source-table-name rescuenet360-marketing-prod-waitlist \
  --target-table-name rescuenet360-marketing-prod-waitlist-restored \
  --restore-date-time 2024-01-01T00:00:00Z
```

**Rollback Deployment**:
```bash
# Frontend
git checkout <previous-commit>
./scripts/deploy-frontend.sh $S3_BUCKET $CLOUDFRONT_ID

# Infrastructure
git checkout <previous-commit>
cd infrastructure/environments/prod
terraform apply
```

### Monitoring Setup

**CloudWatch Dashboard**:

Create custom dashboard to monitor:
- Lambda invocations & errors
- API Gateway requests & latency
- DynamoDB read/write capacity
- CloudFront cache hit ratio

**Cost Alerts**:
```bash
aws cloudwatch put-metric-alarm \
  --alarm-name marketing-site-cost-alert \
  --alarm-description "Alert if monthly cost exceeds $10" \
  --metric-name EstimatedCharges \
  --namespace AWS/Billing \
  --statistic Maximum \
  --period 21600 \
  --evaluation-periods 1 \
  --threshold 10 \
  --comparison-operator GreaterThanThreshold
```

## Support

For deployment issues:
1. Check this guide's Troubleshooting section
2. Review CloudWatch logs
3. Check GitHub Actions workflow logs
4. Contact development team

---

**Deployment Checklist**:
- [ ] Prerequisites installed
- [ ] AWS credentials configured
- [ ] Infrastructure deployed
- [ ] Terraform outputs saved
- [ ] Frontend built successfully
- [ ] Frontend deployed to S3
- [ ] CloudFront cache invalidated
- [ ] Website accessible
- [ ] Waitlist form functional
- [ ] GitHub Actions secrets configured
- [ ] CI/CD workflows tested
- [ ] Monitoring dashboard created
- [ ] Cost alerts configured
- [ ] Documentation reviewed
