// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
// var PORT = process.env.PORT || 8080;
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
// Maybe a function to push the form into the friends class ?
function pushToFriendList(){};

// Calculate the difference between two individuals
function calculateDifference(){};

// Iterate through the different individuals to find the best match
function findOptimalFriend(){};

