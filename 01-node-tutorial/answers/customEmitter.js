const eventEmitter = require("events");

const customEmitter = new eventEmitter()

let counter = 1

setInterval(() => {
    customEmitter.emit('count');
    counter++
}, 1000);

customEmitter.on('count', () => {
    console.log("Counter:", counter)
})