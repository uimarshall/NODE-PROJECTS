// PIPING OFERS A BETTER PERFORMANCE TO ReadStream & WriteStream
// Instead of manually listening to chunk of data, the PIPE pipes it straight to the 'WriteStream' from the 'ReadStream
var http = require("http");
var fs = require("fs");
// Create Readable Stream
// Grab 'readMe.txt' from this directory and pass it in chunk to d 'myReadStream' variabe
var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");
// myReadStream pipes to myWriteStream
myReadStream.pipe(myWriteStream);

// 'myReadStream' manually listens to 'data' event and fires callback instaed of piping(less costly)
/*myReadStream.on("data", function (chunk) {
	console.log("new chunk received:");
	// write to 'writeMe above' and store in myWriteStream
	myWriteStream.write(chunk);
});*/
