// BUFFERS
// -Buffer is a Temporary storage spot for a chunk of data that is being
// transferred from one place to another
// - The buffer is filled with data, then passed along
// -Transfers small chunks of data at a time
// So the data passes thru a STREAM to the BUFFER, the data is then PROCESSED and sent to the USER

// STREAMS
// -Writable streams - allow node.js to write data to a stream: e.g sending data to a user
// -Readable streams - allows node.js to read data from a stream: e.g receiving a request
// -Duplex - can read and write to a stream
var http = require("http");
var fs = require("fs");
// Create Readable Stream
// Grab 'readMe.txt' from this directory and pass it in chunk to d 'myReadStream' variabe
var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");
// createReadStream inherits from the EventEmitter
// 'myReadStream' listens to 'data' event and fires callback

/*myReadStream.on("data", function (chunk) {
	console.log("new chunk received:");
	console.log(chunk);
});*/
myReadStream.on("data", function(chunk) {
	console.log("new chunk received:");
	// write to 'writeMe above' and store in myWriteStream
	myWriteStream.write(chunk);
});
