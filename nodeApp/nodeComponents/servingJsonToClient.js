var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res) {
	// We can access the 'url' pty on the 'req' obj
	console.log(`Request was made: ${req.url}`);
	// Response headers
	res.writeHead(200, { "Content-Type": "application/json" });
	// Response body
	var myObj = {
		name: "Ansalem",
		job: "Developer",
		age: 27
	};
	// 'res.end()' expects a string
	res.end(JSON.stringify(myObj));
});

// SPECIFY A PORT NUMBER FOR NODE TO LISTEN TO, so that node can the req is meant for him
server.listen(3000, "127.0.0.1");
console.log("Now listening to port 3000");
