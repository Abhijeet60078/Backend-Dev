//create http server
const http = require('http');
const { manageFiles } = require('./fs-module');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World! This is my first HTTP server.\n');
    } else if (req.method === 'GET' && req.url === '/files') {
        manageFiles(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
    }
});

server.listen(2000, () => {
    console.log('Server is listening on port 2000');
});                     