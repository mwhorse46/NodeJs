var http=require('http');  //import library
http.createServer(function(req,res){
    res.end("Hello Node\n");
}).listen(3000);  //port no. 3000

console.log("server is running on http://127.0.0.1:3000/")
