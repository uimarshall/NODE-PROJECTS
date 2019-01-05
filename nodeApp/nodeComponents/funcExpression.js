// Node uses functions expressions, so that it can export
function callFunc(func) {
	func();
}
const sayBye = () => {
	console.log("Bye Bye");
};
callFunc(sayBye);
