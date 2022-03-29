const {myEmitter} = require('./myEmitter');


const eventEmitter = new myEmitter();

eventEmitter.on('greet', () => {
    console.log("Abhinav event Emiter 1st");
});

eventEmitter.on('greet', () => {
    console.log("Abhinav event Emiter 2st");
});


eventEmitter.emit("greet");
