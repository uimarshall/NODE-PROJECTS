var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Connect to db
mongoose.connect("mongodb://test:test123@ds149914.mlab.com:49914/todo");
// Create schema
var todoSchema = new mongoose.Schema({
	item: String
});
var Todo = mongoose.model("Todo", todoSchema);
// var itemOne = Todo({ item: "but drinks" }).save(function(err) {
// 	if (err) {
// 		throw err;
// 		console.log("item saved");
// 	}
// 	console.log("item saved");
// });
// var data = [
// 	{ item: "stand up" },
// 	{ item: "trello update" },
// 	{ item: "git commit" }
// ];
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = app => {
	// The function exported returns the routing, taking advantage of the app parameter.
	// the function route to the 'views'(/todo)
	app.get("/todo", (req, res) => {
		// get data from mongodb and pass it to the view
		// empty braces means find all entries in our coll in the db
		Todo.find({}, function(err, data) {
			if (err) throw err;

			res.render("todo", { todos: data });
		});
	});
	app.post("/todo", urlencodedParser, (req, res) => {
		// get data from the view/form and add it to db
		var newTodo = Todo(req.body).save(function(err, data) {
			if (err) throw err;
			res.json(data);
		});
		// data.push(req.body);
		// res.json(data);
	});
	app.delete("/todo/:item", (req, res) => {
		// delete the requestd item from db
		Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function(
			err,
			data
		) {
			if (err) throw err;
			res.json(data);
		});
	});
};
