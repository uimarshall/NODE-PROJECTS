var fs = require("fs");
// fs.mkdirSync("stuff");
// fs.rmdirSync("stuff");
fs.mkdir("stuff", function() {
	fs.readFile("readMe.txt", "utf8", function(err, data) {
		fs.writeFile("./stuff/write.txt", data);
	});
});
