// 'Express' is a module written in JavaScript in which we can use in our application
var express = require("express");
// Accessing all the functionalities that 'express' comes baked wt
// what is returned to us in the express module when we '(require("express"))' is a function = 'express()'
// so we fire the func below to get all functionalities of express like routing, http req mtds
var app = express();
// Templates engine are called 'view engine'
// set the template engine to ejs
// Express knows we want to use ejs template/view engine
// The default behaviour of 'express' is that when we request some view/template, express will look into '/views' for them
app.set("view engine", "ejs");

// ROUTING
/*app.get("/", (req, res) => {
	// Express do not need response or req headers
	res.send("Just a string");
});
// once a req is made to d contact page, fire the callback
app.get("/contact", (req, res) => {
	res.send("You can contact us");
});

*/
// SENDING HTML PAGES
app.get("/", (req, res) => {
	// res.sendFile(__dirname + "/main.html");
	res.render("index");
});
app.get("/contact", (req, res) => {
	// res.sendFile(__dirname + "/contact.html");
	res.render("contact");
});
// ROUTE PARAMETERS
app.get("/profile/:id", (req, res) => {
	// render 'profile.ejs' or render the 'views'
	// The way we pass data into the views(html) is by passind a 2nd param into the 'render' mtd
	// The data we pass is an obj,the data to be passed  is being held 'person'
	var data = {
		name: "Bassey",
		level: "senior",
		age: 29,
		hobbies: ["sporting", "dancing", "reading"]
	};
	res.render("profile", { person: req.params.id, data: data });
});

// TEMPLATE ENGINES
// Templates engines helps us to embed data in JavaScript code into our html
// e.g we can grab a particular 'id' thru our 'route params' and display the datas of that 'id' in html to users
// it is used in injecting dynamic contents into a file
// listen to port
app.listen(3000);
