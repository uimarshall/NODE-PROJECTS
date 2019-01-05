// 'Express' is a module written in JavaScript in which we can use in our application
var express = require("express");
// Accessing all the functionalities that 'express' comes baked wt
// what is returned to us in the express module when we '(require("express"))' is a function = 'express()'
// so we fire the func below to get all functionalities of express like routing, http req mtds
var bodyParser = require("body-parser");
var app = express();
// Templates engine are called 'view engine'
// set the template engine to ejs
// Express knows we want to use ejs template/view engine
// The default behaviour of 'express' is that when we request some view/template, express will look into '/views' for them

// This piece of middleware will help us parse our POST data, which we post to the server from our form for instance
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set("view engine", "ejs");

// MIDDLEWARE
/*app.use("/assets", function(req, res, next) {
	// our middleware goes here btw 'req' & 'res'
	console.log(req.url);
	// 'next' means fire the middleware which will be inside the next 'app.get' func block
	next();
});*/

// EXPRESS comes wt some middleware already built into it THAT CAN BE USED TO SERVE STATIC FILES
// 'express.static' is the 'middleware'
// map the route- '/assets' to the folder where the static file is stored(assets)
app.use("/assets", express.static("assets"));

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
	// Get the query string
	// console.log(req.query);
	// res.sendFile(__dirname + "/contact.html");

	res.render("contact", { queryString: req.query });
});
app.post("/contact", urlencodedParser, (req, res) => {
	// 'urlencodedParser' gives us access to d req body or access to the 'body' pty on the 'req'
	// 'req.body' gives us access to the body of the data submitted frm the form after being pased by 'urlencodedParser'
	// console.log(req.body);

	res.render("contact-success", { data: req.body });
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

// MIDDLEWARE
// Middleware are codes that run between the Request and Response

// QUERY STRINGS
// Is an additional piece of data added to http req in form of 'name-value pair'
// e.g mysite.com/blog/news?page=2, the query string is after d questn mark(?)
// The 'name-value' pair is 'page=2'
// We Parse the req, and pull out the data to be used in our app using the query string

app.listen(3000);
