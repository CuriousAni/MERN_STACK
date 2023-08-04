var events = require('events');

const myEmitter  = new events.EventEmitter();

function c1(){
    console.log('an event occured');
}

function c2(){
    console.log('another event occured');
}

myEmitter.on('evnetone', c1);
myEmitter.on('evnettwo', c2);

myEmitter.emit('eventone');

listen(5000);