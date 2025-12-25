#!/bin/bash
# GAIN Foundation - GitHub Push Script
# Run this on a machine with git and GitHub CLI (gh) installed

# Configuration
REPO_NAME="gain-foundation"
ORG_NAME="TML-4PM"  # Change to your GitHub org/username
DESCRIPTION="GAIN - Global Foundation for Human-AI Collaboration Assessment Platform"

# Option 1: Using GitHub CLI (recommended)
echo "=== Creating GitHub Repository ==="
gh repo create ${ORG_NAME}/${REPO_NAME} --public --description "${DESCRIPTION}"

echo "=== Pushing to GitHub ==="
cd gain-foundation
git remote add origin https://github.com/${ORG_NAME}/${REPO_NAME}.git
git push -u origin main

echo "=== Done! ==="
echo "Repository: https://github.com/${ORG_NAME}/${REPO_NAME}"


# Option 2: From git bundle (if you downloaded the bundle)
# git clone gain-foundation.bundle gain-foundation
# cd gain-foundation
# git remote set-url origin https://github.com/${ORG_NAME}/${REPO_NAME}.git
# git push -u origin main


# Option 3: Manual steps
# 1. Go to https://github.com/new
# 2. Create repo named "gain-foundation"
# 3. Run:
#    cd gain-foundation
#    git remote add origin https://github.com/TML-4PM/gain-foundation.git
#    git push -u origin main
