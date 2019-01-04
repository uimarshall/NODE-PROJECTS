var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res) {
	// We can access the 'url' pty on the 'req' obj
	// we use 'req.url' to check what d user is asking for
	console.log(`Request was made: ${req.url}`);
	if (req.url === "/home" || req.url === "/") {
		// Response headers
		res.writeHead(200, { "Content-Type": "text/html" });
		// Response body
		fs.createReadStream(__dirname + "/index.html").pipe(res);
	} else if (req.url === "/contact") {
		// Response headers
		res.writeHead(200, { "Content-Type": "text/html" });
		// Response body
		fs.createReadStream(__dirname + "/contact.html").pipe(res);
	} else if (req.url === "/api/developers") {
		var developers = [
			{ name: "fred", level: "mid-level", age: 23 },
			{ name: "Bassey", level: "senior", age: 29 }
		];
		// Response headers
		res.writeHead(200, { "Content-Type": "application/json" });
		// Response body
		res.end(JSON.stringify(developers));
	} else {
		// send 404 if page not found
		// Response headers
		res.writeHead(404, { "Content-Type": "text/html" });
		// Response body
		fs.createReadStream(__dirname + "/404.html").pipe(res);
	}
});

// SPECIFY A PORT NUMBER FOR NODE TO LISTEN TO, so that node can the req is meant for him
server.listen(3000, "127.0.0.1");
console.log("Now listening to port 3000");
