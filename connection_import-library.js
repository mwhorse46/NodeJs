var http=require('http');  //
http.createServer(function(req,res){
    res.end("Hello Node\n");
}).listen(3000);

console.log("server is running on http://127.0.0.1:3000/")