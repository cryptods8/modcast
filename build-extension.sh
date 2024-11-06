#!/bin/bash

# Exit on error
set -e

# Read version from package.json
VERSION=$(node -p "require('./apps/extension/package.json').version")

echo "🚀 Building extension version ${VERSION}..."

# Build the extension
echo "Building extension..."
pnpm build --filter=extension --no-cache

# Create zip file
echo "Creating zip archive..."
cd apps/extension/build
zip -r modcast-v${VERSION}.zip chrome-mv3-prod

echo "✅ Build complete! Created modcast-v${VERSION}.zip"
