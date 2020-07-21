const https=require('https');
const fs=require('fs');
const http=require('http');

const url='https://jsonplaceholder.typicode.com/posts';

http.createServer((req,serverReq)=>{
    if(req.method === 'GET' && req.url === '/posts'){
        
        https.get(url,(httpReq)=>{

            httpReq.on('data',data=>{
                httpReq.setEncoding('utf8');
                // console.log(data);
                serverReq.write(data);
            });

            httpReq.on('end',()=>{
                serverReq.end();
                console.log('its over');
            });
        });
    }

}).listen(8888);
console.log('server is running');