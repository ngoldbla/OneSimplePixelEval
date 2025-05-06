// serve.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DIRECTORY = '/Users/ngoldbla/Downloads/OneSimplePixelEval';

// Map file extensions to MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif'
};

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);
  
  // Serve index.html for root path
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(DIRECTORY, filePath);
  
  // Get the file extension
  const extname = path.extname(filePath);
  
  // Default to text/html if MIME type is not found
  const contentType = mimeTypes[extname] || 'text/html';
  
  // Read the file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found
        res.writeHead(404);
        res.end('404 File Not Found');
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Serving files from ${DIRECTORY}`);
  console.log('Press Ctrl+C to stop');
});