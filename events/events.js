var events =require('events');
var eventEmitter=new events.EventEmitter();

eventEmitter.on('clicked',function(){
    console.log('something is clicked');
});

eventEmitter.emit('clicked');