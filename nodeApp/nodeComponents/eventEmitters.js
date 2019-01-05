// CORE MODULES IN NODE
// EVENT EMITTERS
var events = require("events");
// one of the things returned frm the module.exports of 'events module' is the 'eventEmitter'
// We can use event emitters to craete custom events & react to those events when they are emitted
// listen to a click event on dis element and do sth thru d callback func
// element.on("click", function () { });

// CREATE A CUSTOM EVENT
// returned to us in the 'events module' is a constructor called 'EventEmitter'
var myEmitter = new events.EventEmitter();
// listen to 'someEvents' and log a mssg to d console
myEmitter.on("someEvents", mssg => {
	console.log(mssg);
});
// fire the 'someEvents' and pass the 'mssg' as d 2nd params
myEmitter.emit("someEvents", "the event was emitted successfully!");
