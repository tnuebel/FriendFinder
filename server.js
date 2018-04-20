var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friendsArray = [
	{
		name: 'Scooter',
		photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-15.jpg',
		scores: [
			'1',
			'5',
			'5',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Fluffy',
		photo: 'https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg',
		scores: [
			'2',
			'4',
			'1',
			'1',
			'1',
			'1',
			'1',
			'2',
			'1',
			'5'
		]
	}
];
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
    // res.send("work in progress from the server.js page!!");
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(req, res){
    res.json(friendsArray);
});

app.post("/api/new", function(req, res){
    // get the data from the post 
    var data = req.body;
    friendsArray.push(data);
    res.json({
        "message": "Added new friend",
        "dataSent": data
    });


    // the goal was to get the info gathered from the survey...
    // then puch that info into the friend's array,
    // wasn't able to get it to work.

    for (var i = 0; i < friends.length; i += 1) {
        // Get the new match.
        var newMatch = friends[i];
        {
          // push it into our friends array.
          friends.push(newMatch);
        }
      }



    // respond back with a messsage like "Added friend!";
    // unable to get the prompt to engage.

    var newFriend = window.prompt("New friend added!");
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});