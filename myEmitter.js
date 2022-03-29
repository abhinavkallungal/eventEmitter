function myEmitter() {
    this.events = {};
}

myEmitter.prototype.on = function (type, listener) {
    if (typeof listener !== "function") {
        throw new Error("Listener must be a function!")
    }

    this.events[type] = this.events[type] || [];

    this.events[type].push(listener);
}


myEmitter.prototype.emit = function (type) {
    if (this.events[type]) { // checks if event is a property on Emitter
        this.events[type].forEach(function (listener) {
            listener();
        })
    }
}

module.exports = {myEmitter}





