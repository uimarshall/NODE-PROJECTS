// pties & mtds available in the Global Obj of Node
// console.log(__dirname);
// console.log(__filename);
// Module is simply a file
const bundle = require("./bundle");
console.log(bundle.counter(["hat", 5, "cup"]));
console.log(bundle.adder(5, 10));
