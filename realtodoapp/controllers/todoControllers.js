var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Connect to db
mongoose.connect("mongodb://test:test123@ds149914.mlab.com:49914/todo");
var data = [
	{ item: "stand up" },
	{ item: "trello update" },
	{ item: "git commit" }
];
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = app => {
	// The function exported returns the routing, taking advantage of the app parameter.
	// the function route to the 'views'(/todo)
	app.get("/todo", (req, res) => {
		res.render("todo", { todos: data });
	});
	app.post("/todo", urlencodedParser, (req, res) => {
		data.push(req.body);
		res.json(data);
	});
	app.delete("/todo/:item", (req, res) => {
		data = data.filter(function(todo) {
			return todo.item.replace(/ /g, "-") !== req.params.item;
		});
		res.json(data);
	});
};
