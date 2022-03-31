const EventEmitter = require('events');

// Creating a class
class Emitter extends EventEmitter {}

// Creating a new object
const myEmitter = new Emitter();

//Event listener
myEmitter.on('event', () => console.log('A thing happened!'))

myEmitter.emit('event');