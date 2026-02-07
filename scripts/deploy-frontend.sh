#!/bin/bash
# Deploy frontend to S3 and invalidate CloudFront cache

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check arguments
if [ $# -ne 2 ]; then
    echo -e "${RED}Error: Missing required arguments${NC}"
    echo "Usage: ./deploy-frontend.sh <bucket-name> <distribution-id>"
    echo ""
    echo "Example:"
    echo "  ./deploy-frontend.sh rescuenet360-marketing-prod-frontend E1234567890ABC"
    echo ""
    echo "Get these values from Terraform outputs:"
    echo "  cd infrastructure/environments/prod"
    echo "  terraform output s3_bucket_name"
    echo "  terraform output cloudfront_distribution_id"
    exit 1
fi

BUCKET_NAME=$1
DISTRIBUTION_ID=$2

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}RescueNet360 Frontend Deployment${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not installed${NC}"
    echo "Install it from: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is not installed${NC}"
    exit 1
fi

# Navigate to frontend directory
cd "$(dirname "$0")/../frontend"

echo -e "${YELLOW}Step 1/4: Installing dependencies...${NC}"
npm install

echo -e "${YELLOW}Step 2/4: Building frontend...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}Error: Build failed - dist/ directory not found${NC}"
    exit 1
fi

echo -e "${YELLOW}Step 3/4: Uploading to S3...${NC}"

# Upload all files except index.html with long cache
echo "  Uploading assets with long cache..."
aws s3 sync dist/ s3://$BUCKET_NAME/ --delete \
  --cache-control "public,max-age=31536000,immutable" \
  --exclude "index.html"

# Upload index.html with no cache
echo "  Uploading index.html with no cache..."
aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html \
  --cache-control "public,max-age=0,must-revalidate"

echo -e "${YELLOW}Step 4/4: Invalidating CloudFront cache...${NC}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)

echo "  Invalidation ID: $INVALIDATION_ID"

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "CloudFront URL: https://$(aws cloudfront get-distribution --id $DISTRIBUTION_ID --query 'Distribution.DomainName' --output text)"
echo ""
echo "Note: CloudFront cache invalidation may take 1-2 minutes to complete."
echo ""
