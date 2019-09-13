var fs= require('fs');
var readStream = fs.createReadStream('text.txt');
readStream.setEncoding('utf8');
var writeStream = fs.createWriteStream('write.txt');

readStream.on('data',function(chunk){
    console.log('-------------------------------------');
    writeStream.write(chunk);
});

readStream.on('end',function(chunk){
    console.log('----------------end------------------');
})
