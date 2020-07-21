const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    let body='';

    if(req.method==='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});

        fs.readFile('./http-form.html','UTF-8',(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }
    else if(req.method==='POST'){
        req.on('data',(data)=>{
            body+=data;
        });

        req.on('end',()=>{
            res.writeHead(200,{'content-Type':'text/html'});
            res.write(body,()=>{
                res.end();
            });
        });

    }
    else{
        res.writeHead(200,{'content-Type':'text/plain'});
        res.end('404 ,could not found page');
    }

}).listen(8888);

console.log('server is running');