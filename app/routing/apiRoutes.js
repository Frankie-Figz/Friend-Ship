// Dependencies
// =============================================================

var express = require("express");
var path = require("path");

var friendsData = require("../data/friends");

// var Math = require("mathjs");

module.exports = function(app){

  let localMinimum = {
    name: "",
    value: 100,
    photo:""
  };
  
  // A GET route with the url `/api/friends`. 
  // This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // A POST routes `/api/friends`. 
  // This will be used to handle incoming survey results. 
  // This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function(req, res) {
    
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newPerson = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newPerson.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

    // res.json(friendsData);

    for(var i = 0; i < friendsData.length; i++){
      var currentScore = 0;

      for(var j in newPerson.score){
        console.log(newPerson);
        currentScore = currentScore + Math.abs(friendsData[i].score[j] - parseInt(newPerson.score[j]));
        console.log(currentScore); 
      }

      if(currentScore < localMinimum.value){
        localMinimum.value = currentScore;
        localMinimum.name = friendsData[i].name;
        localMinimum.photo = friendsData[i].photo;
      }
    }

    console.log(localMinimum);

    res.json(localMinimum);

    // console.log(localMininum.name);
    // console.log(localMininum.value);

  });
}
