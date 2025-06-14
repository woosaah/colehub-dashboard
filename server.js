const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url}`);

  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  // Determine content type by file extension
  const extname = path.extname(filePath).toLowerCase();

  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    // add more mime types as needed
  };

  let contentType = mimeTypes[extname] || 'application/octet-stream';

  // Special case: API endpoint
  if (req.url === '/api/tasks') {
    fs.readFile(path.join(__dirname, 'data', 'tasks.json'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Could not read tasks' }));
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(data);
    });
    return;
  }

  // Serve static files
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});
