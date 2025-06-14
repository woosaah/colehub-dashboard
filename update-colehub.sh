#!/bin/bash

cd /home/colle/colehub || exit 1

# Pull updates from GitHub
git pull origin main >> /home/colle/git-sync.log 2>&1

# Check if anything was updated
if [ $? -eq 0 ]; then
  echo "$(date) - Update pulled successfully, restarting service" >> /home/colle/git-sync.log
  sudo systemctl restart colehub-server
else
  echo "$(date) - Git pull failed" >> /home/colle/git-sync.log
fi
