// where all my logic is. PLus some more.

var friends = require("../data/friends.js");

module.exports = app => {
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    app.post("/api/friends", (req, res) => {
        console.log("Gotta push info here.");
        
        // converts all the values into ints for later use.
        for (var i in req.body.scores) {
            req.body.scores[i] = parseInt(req.body.scores[i]);
        }

        friends.push(req.body);
    });
}