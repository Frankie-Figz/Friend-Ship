// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Maybe a function to push the form into the friends class ?
function pushToFriendList();

// Calculate the difference between two individuals
function calculateDifference();

// Iterate through the different individuals to find the best match
function findOptimalFriend()

