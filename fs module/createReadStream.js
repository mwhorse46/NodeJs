// var fs= require('fs');
// var readStream = fs.createReadStream('text.txt','utf8');
// var data='';
// readStream.on('data',function(chunk){
//     console.log('-------------------------------------');
//     console.log(chunk);
// });

// readStream.on('end',function(chunk){
//     console.log('----------------end------------------');
// })



var fs= require('fs');
var readStream = fs.createReadStream('text.txt');
readStream.setEncoding('utf8');
var data='';
readStream.on('data',function(chunk){
    console.log('-------------------------------------');
    data+=chunk;
});

readStream.on('end',function(chunk){
    console.log(data);
    console.log('----------------end------------------');
})