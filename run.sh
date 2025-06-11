*/5 * * * * cd /home/colle/colehub && /usr/bin/git pull >> /home/colle/git-sync.log 2>&1 && pkill -f "node index.js" && /usr/bin/node /home/colle/colehub/index.js >> /home/colle/node.log 2>&1
