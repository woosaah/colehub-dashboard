const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url}`);

  let filePath = '';
  let contentType = '';

  if (req.url === '/' || req.url === '/index.html') {
    filePath = path.join(__dirname, 'index.html');
    contentType = 'text/html';
  } else if (req.url === '/main.js') {
    filePath = path.join(__dirname, 'main.js');
    contentType = 'application/javascript';
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Server Error');
      return;
    }
    res.writeHead(200, {'Content-Type': contentType});
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
