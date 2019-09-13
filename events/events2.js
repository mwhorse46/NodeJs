var events =require('events');
var eventEmitter=new events.EventEmitter();

eventEmitter.on('clicked',function(button1){
    console.log(button1+' is clicked');
});

eventEmitter.emit('clicked','button1');