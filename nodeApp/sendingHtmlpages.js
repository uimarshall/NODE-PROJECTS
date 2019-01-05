// We use the 'sendFile' mtd to send html pages in 'expresss'
var express = require("express");

var app = express();

// ROUTING
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/main.html");
});
// once a req is made to d contact page, fire the callback
app.get("/contact", (req, res) => {
	res.sendFile(__dirname + "/contact.html");
});

// ROUTE PARAMETERS
app.get("/profile/:id", (req, res) => {
	res.send(`You want the profile of the person with an id of ${req.params.id}`);
});
// listen to port
app.listen(3000);
