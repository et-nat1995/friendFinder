const path = require("path");

module.exports = app => {
	app.get("/server", (req, res) =>{
		res.sendFile(path.resolve("./app/public", "server.html"));
	});
	
	app.get("*", (req, res) => {
		res.sendFile(path.resolve("./app/public", "home.html"));
	});
}
