var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    var readStream =fs.createReadStream('text.txt','utf8');
    readStream.pipe(res);
}).listen(3000);

console.log('server in running on http://127.0.0.1:3000/')