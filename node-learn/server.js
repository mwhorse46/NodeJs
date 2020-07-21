const http =require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'});
    res.end('<h1>hello guys harshit bansal here!</h1>');
});

server.listen(8888);
console.log("our server is running");