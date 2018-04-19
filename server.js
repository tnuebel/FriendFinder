var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friends = [];

app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.send("work in progress");
});

app.get("/survey", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.send("survey page in progress");
});

// create a catch-all/default route:
app.use(function(req, res){
    res.send(404);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});