var express =require('express');

var app=express();

app.get('/',function(req,res){
    res.send('this is home page');
})

app.get('/about',function(req,res){
    res.send('this is about page');
})

app.get('/contact',function(req,res){
    res.send('this is contact page');
})

app.listen(3000,function(){
    console.log('server is running on port http://127.0.0.1:3000/');
})