var express = require("express");

// require controllers and invoke the routing func
var todoController = require("./controllers/todoControllers");

// Set up express app
var app = express();

// Set up template engine
app.set("view engine", "ejs");

// Static files middleware
app.use(express.static("./public"));

// fire controllers & invoke all mtds and pties that comes wt express
// especially the http request mtds and routing
todoController(app);

//  Listen to port
app.listen(3000);
console.log("You are listening to port 3000");
