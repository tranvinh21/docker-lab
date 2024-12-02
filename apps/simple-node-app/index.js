const http = require('http');

const port = 8080;

// Create a server
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to my simple Node.js server!');
    } else if (req.url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is the about page of the server.');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
