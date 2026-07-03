# RescueNet360 Marketing Site Architecture

## Overview

The RescueNet360 marketing site is a modern, serverless web application built for performance, scalability, and cost-efficiency. The platform is completely isolated from other production infrastructure and designed for easy expansion from a single-page site to a multi-page marketing platform.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Browser                            │
└─────────────────┬───────────────────────────────────────────────┘
                  │
                  │ HTTPS
                  │
         ┌────────▼─────────┐
         │   CloudFront     │  (Global CDN)
         │   Distribution   │  - Brotli/Gzip compression
         │                  │  - SPA routing (index.html)
         └────────┬─────────┘  - Long cache for assets
                  │
                  │ OAC (Origin Access Control)
                  │
         ┌────────▼─────────┐
         │   S3 Bucket      │  (Private)
         │   (Static Site)  │  - React build artifacts
         │                  │  - Images, CSS, JS
         └──────────────────┘

         ┌──────────────────────────────────────────────────────┐
         │               Waitlist Flow                          │
         └──────────────────────────────────────────────────────┘

         ┌────────────────┐
         │ WaitlistForm   │  (React Component)
         │  Component     │
         └───────┬────────┘
                 │
                 │ POST /waitlist
                 │
         ┌───────▼────────┐
         │  API Gateway   │  (HTTP API)
         │   (HTTP API)   │  - CORS enabled
         │                │  - Throttling: 10 req/s
         └───────┬────────┘
                 │
                 │ Lambda Integration
                 │
         ┌───────▼────────┐
         │ Lambda Function│  (Node.js 20.x)
         │  - Validate    │  - Email validation
         │  - Store       │  - Error handling
         └───────┬────────┘
                 │
                 │ PutItem
                 │
         ┌───────▼────────┐
         │   DynamoDB     │  (On-demand billing)
         │  Waitlist Table│  - PK: email
         │                │  - SK: timestamp
         └────────────────┘
```

## Technology Stack

### Frontend
- **React 18**: Modern UI library with hooks
- **Vite 5**: Fast build tool and dev server
- **React Router**: Client-side routing (future multi-page support)
- **Vanilla CSS**: Custom properties for design system
- **JavaScript**: ES2020+ features

### Backend
- **API Gateway HTTP API**: Cost-effective REST endpoint (70% cheaper than REST API)
- **Lambda (Node.js 20.x)**: Serverless compute for waitlist processing
- **DynamoDB**: NoSQL database with on-demand billing

### Infrastructure
- **Terraform**: Infrastructure as Code
- **S3**: Static asset storage
- **CloudFront**: Global content delivery network
- **ACM**: SSL/TLS certificates
- **CloudWatch**: Logs and monitoring

### CI/CD
- **GitHub Actions**: Automated deployments
- **AWS CLI**: Deployment scripting

## Design Decisions

### 1. HTTP API vs REST API

**Choice**: HTTP API (API Gateway v2)

**Rationale**:
- 70% cost savings compared to REST API
- Built-in CORS support (simpler configuration)
- Lower latency
- Sufficient features for simple waitlist endpoint
- REST API advantages (API keys, usage plans) not needed

### 2. Lambda Runtime: Node.js 20.x

**Choice**: Node.js 20.x

**Rationale**:
- Matches frontend stack (JavaScript ecosystem)
- Faster cold starts than Python for simple workloads
- Easy type sharing with frontend (future enhancement)
- Rich AWS SDK support
- Native JSON handling

### 3. DynamoDB On-Demand vs Provisioned

**Choice**: On-demand billing

**Rationale**:
- No capacity planning required
- Auto-scales with traffic
- Cost-effective for unpredictable workloads
- Pay only for what you use
- Switch to provisioned if traffic becomes predictable

### 4. CloudFront OAC vs OAI

**Choice**: Origin Access Control (OAC)

**Rationale**:
- OAC is the modern replacement for OAI
- Better security model
- Supports all S3 features
- AWS recommends OAC for new deployments

### 5. Terraform Modules vs Monolith

**Choice**: Modular Terraform structure

**Rationale**:
- Reusable modules for frontend-hosting and waitlist-api
- Easy to add dev/staging environments
- Clear separation of concerns
- Testable in isolation

### 6. Single-Page vs Multi-Page

**Choice**: Single-page initially, architected for multi-page

**Rationale**:
- Faster initial development
- React Router already configured
- CloudFront SPA routing enabled (404 → index.html)
- Can add new pages without infrastructure changes

## Security Architecture

### Network Security
- **HTTPS Enforced**: CloudFront redirects HTTP to HTTPS
- **TLS 1.2+**: Minimum protocol version
- **Private S3 Bucket**: No public access, CloudFront OAC only

### API Security
- **CORS**: Restricts frontend domains (update `*` to specific domain in production)
- **Throttling**: 10 requests/second per IP
- **Input Validation**: Email validation in Lambda
- **Reserved Concurrency**: Prevents runaway Lambda costs

### IAM Security
- **Least Privilege**: Lambda has minimal permissions (DynamoDB PutItem only)
- **No Hardcoded Secrets**: Environment variables for configuration
- **CloudWatch Logs**: Audit trail for all Lambda executions

## Performance Optimization

### Frontend Performance
- **Code Splitting**: Vite automatic code splitting
- **Asset Optimization**: Image compression via vite-plugin-image-optimizer
- **Long Cache**: Assets cached for 1 year (immutable)
- **No Cache HTML**: index.html always fresh
- **Compression**: Brotli and Gzip enabled

### CDN Strategy
- **Global Distribution**: CloudFront edge locations worldwide
- **Cache Behaviors**:
  - `/assets/*`: 1 year cache
  - `/index.html`: No cache
  - Default: 5 minute cache

### API Performance
- **Lambda Cold Starts**: Mitigated by Node.js (faster than Python)
- **Reserved Concurrency**: Prevents cold starts during steady traffic
- **Minimal Dependencies**: Faster initialization

## Scalability

### Current Capacity
- **Frontend**: Unlimited (CloudFront scales automatically)
- **API**: 10,000 requests/second (API Gateway + Lambda)
- **Database**: DynamoDB auto-scales

### Scaling Triggers
- Add CloudFront WAF when traffic >10k visitors/day
- Switch DynamoDB to provisioned capacity at >1M writes/month
- Add Redis/ElastiCache for duplicate email checks at high volume
- Implement rate limiting per user (not just per IP)

## Cost Optimization

### Current Costs (Low Traffic)
- CloudFront: $1-2/month
- S3: $0.50/month
- API Gateway: $1/month
- Lambda: $0.20/month
- DynamoDB: $0.25/month
- **Total: ~$3-5/month**

### Cost Control Measures
- **On-Demand Billing**: Pay only for actual usage
- **Reserved Concurrency**: Prevents runaway Lambda costs
- **S3 Lifecycle**: Deletes old versions after 30 days
- **CloudFront Price Class**: Can restrict to US/Europe for cost savings

## Monitoring & Observability

### CloudWatch Metrics
- Lambda invocations, errors, duration
- API Gateway requests, 4xx/5xx errors
- DynamoDB read/write capacity
- CloudFront cache hit ratio

### Logging
- Lambda logs: 30-day retention
- API Gateway access logs: 30-day retention
- CloudTrail: Audit trail for infrastructure changes

### Recommended Alarms
- Lambda error rate >5%
- API Gateway 5xx errors >10 in 5 minutes
- DynamoDB throttling events
- Billing alarm at $10/month threshold

## Disaster Recovery

### Backup Strategy
- **DynamoDB**: Point-in-time recovery enabled
- **S3**: Versioning enabled (30-day retention)
- **Terraform State**: Store remotely in S3 (recommended)

### Recovery Procedures
- **Frontend**: Redeploy from Git + re-upload to S3
- **API**: Terraform apply recreates infrastructure
- **Data**: DynamoDB point-in-time recovery up to 35 days

## Future Enhancements

### Phase 2 Features
1. **Multi-Page Support**: Add About, Blog, Careers pages
2. **Email Confirmation**: SES integration for waitlist confirmation
3. **Analytics**: Google Analytics 4 integration
4. **SEO**: Server-side rendering or static generation
5. **Admin Dashboard**: View waitlist signups

### Phase 3 Features
1. **A/B Testing**: CloudFront Functions or Lambda@Edge
2. **Personalization**: User segmentation
3. **Multi-Language**: i18n support
4. **Advanced Analytics**: Custom event tracking

## Compliance & Privacy

### GDPR Considerations
- **Email Storage**: DynamoDB stores email + timestamp
- **Data Retention**: No automatic deletion (implement if required)
- **Right to be Forgotten**: Manual deletion via DynamoDB console
- **Privacy Policy**: Required on waitlist form

### HIPAA Compliance
- Not HIPAA-compliant (no PHI collected)
- Lambda includes HIPAA-eligible services if needed later

## Deployment Strategy

### Environments
- **Production**: Single environment initially
- **Staging/Dev**: Can be added by duplicating Terraform environment

### Deployment Process
1. Code merged to `main` branch
2. GitHub Actions triggers build
3. Frontend deployed to S3
4. CloudFront cache invalidated
5. Infrastructure changes via Terraform

### Rollback Strategy
- Frontend: Upload previous build to S3
- Infrastructure: `terraform apply` with previous version
- Database: Point-in-time recovery if data corruption

## Maintenance

### Regular Tasks
- Review CloudWatch logs for errors (weekly)
- Check AWS costs (monthly)
- Update dependencies (monthly)
- Review security advisories (continuous)
- Test disaster recovery (quarterly)

### Terraform State Management
- Store state remotely in S3
- Enable versioning on state bucket
- Use DynamoDB for state locking
- Regular backups of state file

## Technical Debt

### Known Limitations
1. CORS set to `*` (change to specific domain in production)
2. No automated testing (add unit/integration tests)
3. No performance monitoring (add real user monitoring)
4. No error tracking (add Sentry or similar)
5. Manual ACM certificate validation (automate with Route53)

### Prioritized Improvements
1. Add E2E tests (Playwright or Cypress)
2. Implement error tracking
3. Add performance monitoring
4. Set up automated security scanning
5. Implement blue-green deployments
