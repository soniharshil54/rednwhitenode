var events = require("events")

var eventEmitter = new events.EventEmitter();

var snap = function(){
	console.log("snap happened")
}

eventEmitter.on("snapEvent",snap)

eventEmitter.emit("snapEvent")