@echo off
REM ====================================================================
REM Farmer Connect Portal - AWS S3 + CloudFront Automated Deployment
REM ====================================================================

set S3_BUCKET=farmer-connect-portal-prod
set CLOUDFRONT_DIST_ID=E1234567890ABC

echo [1/3] Validating static files in farmer-connect-portal...
if not exist index.html (
    echo Error: index.html not found! Run from project root.
    exit /b 1
)

echo [2/3] Syncing application assets to Amazon S3 (s3://%S3_BUCKET%)...
aws s3 sync . s3://%S3_BUCKET% --delete --exclude ".git/*" --exclude "deploy-aws.bat"

echo [3/3] Invalidating Amazon CloudFront CDN edge caches...
aws cloudfront create-invalidation --distribution-id %CLOUDFRONT_DIST_ID% --paths "/*"

echo.
echo ====================================================================
echo ✅ Deployment Complete!
echo Farmer Connect Portal is live on AWS CloudFront CDN.
echo ====================================================================
