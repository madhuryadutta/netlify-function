// server.js
const http = require('http');
const { createServer } = http;
const { parse } = require('url');
const hello = require('./api/hello');

const server = createServer((req, res) => {
    const { pathname } = parse(req.url);

    // Routing
    if (pathname === '/api/hello') {
        hello(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
