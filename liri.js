//Import the keys.js file and store it in a variable.
var keys = require(".keys.js");

var action = process.argv[2];
var value = process.argv[3];

//Used to import the client library for the Twitter
var Twitter = require('twitter');


// We will then create a switch-case statement (if-then would also work).
// The switch-case will direct which function gets run.
switch (action) {
    case "my-tweets":
    tweets();
    break;

    case "spotify-this-song":
    spotify();
    break;

    case "movie-this":
    movie();
    break;
    
    case "do-what-it-says":
    doIt();
    break;        
}

// Call "tweets" function 
function tweets() {

        var client = new Twitter(keys.twitter);
};