var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'application/json'});
    var jsonObj={
        name : 'harshit',
        surname : 'bansal',
        age : 26,
    };
    res.end(JSON.stringify(jsonObj));
}).listen(3000);

console.log('server in running on http://127.0.0.1:3000/')