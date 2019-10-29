// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var friendsData = require("../data/friends");

module.exports = function(app){

  // A GET route with the url `/api/friends`. 
  // This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    // var chosen = req.params.character;

    // console.log(chosen);

    // for (var i = 0; i < characters.length; i++) {
    //   if (chosen === characters[i].routeName) {
    //     return res.json(characters[i]);
    //   }
    // }

    // return res.json(false);
  });

  // A POST routes `/api/friends`. 
  // This will be used to handle incoming survey results. 
  // This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newPerson = req.body;
    console.log("I am here !");
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newPerson.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newPerson);

    friendsData.push(newPerson);

    res.json(friendsData);
  });


}