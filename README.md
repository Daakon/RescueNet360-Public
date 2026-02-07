# RescueNet360 Marketing Site

> Modern, serverless marketing platform for RescueNet360 with waitlist functionality

## Overview

This is a completely isolated marketing site platform designed to replace the current rescuenet360.com. Built with React, Vite, and AWS serverless technologies, it features a beautiful glassmorphism design and integrated waitlist system.

### Key Features

- **Static Frontend**: React + Vite for blazing-fast performance
- **Serverless Backend**: API Gateway + Lambda + DynamoDB for waitlist management
- **Cloud Infrastructure**: S3 + CloudFront with Terraform for infrastructure as code
- **CI/CD**: GitHub Actions for automated deployments
- **Scalable**: Architected for future multi-page expansion

## Tech Stack

### Frontend
- React 18
- Vite 5
- React Router (routing-ready)
- Vanilla CSS with design tokens

### Backend
- API Gateway HTTP API
- Lambda (Node.js 20.x)
- DynamoDB (on-demand)

### Infrastructure
- Terraform (modular design)
- S3 (private bucket)
- CloudFront with OAC
- ACM (optional custom domain)

## Project Structure

```
RescueNet360-Public/
├── frontend/          # React application
├── infrastructure/    # Terraform modules
├── scripts/          # Deployment scripts
├── docs/             # Documentation
└── .github/          # CI/CD workflows
```

## Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm or pnpm
- Terraform 1.5+
- AWS CLI configured
- AWS account

### Local Development

```bash
# Install frontend dependencies
cd frontend
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit http://localhost:5173 to see the site.

### Infrastructure Deployment

```bash
# Navigate to Terraform environment
cd infrastructure/environments/prod

# Initialize Terraform
terraform init

# Preview changes
terraform plan

# Deploy infrastructure
terraform apply

# Get outputs (CloudFront URL, API endpoint)
terraform output
```

### Frontend Deployment

```bash
# From project root
cd scripts
./deploy-frontend.sh <bucket-name> <distribution-id>
```

## Documentation

- **[Architecture](docs/ARCHITECTURE.md)** - Technical architecture and design decisions
- **[Deployment](docs/DEPLOYMENT.md)** - Deployment procedures and troubleshooting
- **[Frontend Guide](frontend/README.md)** - Frontend development guide
- **[Infrastructure Guide](infrastructure/README.md)** - Terraform usage and AWS resources

## Environment Variables

### Frontend

Create `frontend/.env.local`:

```
VITE_API_ENDPOINT=<your-api-gateway-endpoint>
```

### Terraform

Create `infrastructure/environments/prod/terraform.tfvars`:

```hcl
aws_region           = "us-east-1"
environment          = "prod"
project_name         = "rescuenet360-marketing"
enable_custom_domain = false
custom_domain        = ""
```

## Cost Estimate

Expected monthly AWS costs (low traffic):
- CloudFront: $1-2
- S3: $0.50
- API Gateway: $1
- Lambda: $0.20
- DynamoDB: $0.25

**Total: ~$3-5/month**

## Design System

- **Primary Color**: Teal `#1fc7b6`
- **Dark Base**: Chrome `#1A1D23`
- **Typography**: Fluid sizing with `clamp()`
- **Effects**: Glassmorphism with 20px blur
- **Responsive**: Mobile-first with 768px breakpoint

## Contributing

1. Create feature branch
2. Make changes
3. Test locally
4. Submit pull request

## License

Proprietary - All rights reserved

## Support

For questions or issues, contact the development team.

---

Built with ❤️ for RescueNet360
