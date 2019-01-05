// We use the 'http' module to create server

var http = require("http");
// Create Server
// whenever a req is sent to d server d calback func fires
// The callback takes two Params, the 'req' & 'res' obj
// The req obj come loaded wt details abt the request that has been made
// The 'res' obj is what we use to send response to d 'client'
var server = http.createServer(function(req, res) {
	// We can access the 'url' pty on the 'req' obj
	console.log(`Request was made: ${req.url}`);
	// Response headers
	res.writeHead(200, { "Content-Type": "text/plain" });
	// Response body
	// End the response and send the response to d browser icluding d data(plain-text)
	res.end("Hey, here is your request");
});

// SPECIFY A PORT NUMBER FOR NODE TO LISTEN TO, so that node can the req is meant for him
server.listen(3000, "127.0.0.1");
console.log("Now listening to port 3000");
// RESPONSE HEADERS
// These are extra info attached to d Req & Res:
//1. -Content-type e.g Json, html,plain-text
//2 - Http status code,
// so we hv 'request + request headers' & 'response data + response headers'

// USING DEVTOOLS TO CHECK THE REQUEST
// -Goto Devtools
// -click Network
// -Refresh the browser
// click 127.0.0.1 and it will show you the details
