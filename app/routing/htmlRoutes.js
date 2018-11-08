const path = require("path");

module.exports = app => {
	app.get("/survey", (req, res) =>{
		res.sendFile(path.resolve("/app/public", "servey.html"));
	});
	
	app.get("*", (req, res) => {
		console.log(__dirname);
		res.sendFile(path.resolve("./app/public", "home.html"));

	});
}
