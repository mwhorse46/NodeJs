const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    console.log(req);
}).listen(8888);