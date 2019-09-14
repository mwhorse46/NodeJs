var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('requested url: ' + req.url);
    if (req.url === '/' || req.url === '/index') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream('index.html', 'utf8').pipe(res);
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream('about.html', 'utf8').pipe(res);
    }
    else {
        res.writeHead(200, { 'content-type': 'application/json' });
        var jsonObj = {
            name: 'harshit',
            surname: 'bansal',
            age: 26,
        };
        res.end(JSON.stringify(jsonObj));
    }
}).listen(3000);

console.log('server in running on http://127.0.0.1:3000/')