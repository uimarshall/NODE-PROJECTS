var counter = arr => {
	return `There are ${arr.length} elements in this array`;
};

var adder = (a, b) => {
	return `The sum of ${a} and ${b} is ${a + b}`;
};
// export the var 'counter' frm this file/module called bundle.js
// module.exports is just an obj that has a pty 'counter', 'adder' etc
// module.exports.counter = counter;
// module.exports.adder = adder;
// OR

module.exports = {
	counter: counter,
	adder: adder
};
