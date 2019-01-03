// What util(utility) module allows us to do is to inherit certain things frm objs built into Node.js or other objs
var events = require("events");
var util = require("util");
// create new obj Constructor
var Person = function(name) {
	this.name;
};

// we want 'Person obj' to inherit sth and what we want is d EventEmitter
// any instance of the 'Person' created will inherit the EventEmitter so dat we can attach custom events to people
util.inherits(Person, events.EventEmitter);
var james = new Person("james");
var peter = new Person("peter");
var john = new Person("john");
var people = [james, peter, john];
people.forEach(person => {
	person.on("speak", mssg => {
		console.log(`${person.name} says: ${mssg}`);
	});
});
james.emit("speak", "Hey Guys");
peter.emit("speak", "Hey Guys i need some more");
james.emit("speak", "hi Fellas just to say Hello!");
