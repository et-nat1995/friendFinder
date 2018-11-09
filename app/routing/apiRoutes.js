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

        var totDiff;
        var diffArry = [];
        var newFriend = req.body;

        for (var i = 0; i < friends.length; i++) {
            totDiff = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
                totDiff += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
            } //for j
            diffArry.push(totDiff);
        }

        var match = diffArry.indexOf(Math.min(...diffArry));
        console.log(match);

        console.log(diffArry);


        res.send(friends[match]);
        friends.push(req.body);

    });
}