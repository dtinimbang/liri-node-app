require("dotenv").config();

var fs = require("fs");
var keys=require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id:'0d499989c18f44bbb8db45603dd8d54c',
  secret: 'cd329c9606454a2cac1de8375fad55d0'
});

var defaultSong = "Ace of Base";
var request = require('request');
var client = new Twitter(keys.twitter);



var a = process.argv[2];
var b = process.argv[3]




//Choose which app________________________________________________________



// function SwitchCase(a,b){

    switch(a){
		case 'my-tweets':
            myTweets();
            break;

		case "spotify-this-song":
		if(b === undefined){
			b === defaultSong;
		}
            mySpotify(b);
			break;
		
		case "movie-this":
			myMovie();
			break;
        
    }


//TWITTER________________________________________________________
function myTweets(){

	
	var tweetsLength;

	//From twitter's NPM documentation, grab the most recent tweets
	var params = {screen_name: 'DonMikeyBang'};
	client.get('statuses/user_timeline',params,  function(error, tweets, response) {
		if(error) throw error;
		// console.log(response)
		//Loop through the number of tweets that were returned to get the number of tweets returned..
		//Then loop through the length of tweets and return the tweets date and text.
		tweetsLength = tweets.length;

		// for(var i=0; i<tweetsLength; i++){
		// 	tweetsLength ++;
		// }
		// if (tweetsLength > 20){
		// 	tweetsLength = 20;
		// }
		var tweetsLength = tweetsLength < 20 ? tweetsLength : 20;
		for (var i=0; i<tweetsLength; i++){
			// var tweet = tweets[i]
			console.log("@DonMikeyBang Tweet " + (i+1) + " created on: " + tweets[i].created_at);
			console.log("Tweet " + (i+1) + " text: " + tweets[i].text);

		}
	}
	);
}
//SPOTIFY________________________________________________________
function mySpotify(song){

	//If user has not specified a song , default to Ace of Base
	if(song === ""){
		song = "the sign Ace of Base";
	}

	spotify.search({ type: 'track', query: song}, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }

    var song = data.tracks.items[0];
    console.log("===================-Artist===================");
    for(i=0; i<song.artists.length; i++){
    	console.log(song.artists[i].name);
    }

    console.log("===================Song Name===================");
    console.log(song.name);

	console.log("===================Preview Link===================");
    console.log(song.preview_url);

    console.log("===================Album===================");
    console.log(song.album.name);

	});

}

//OMDB________________________________________________________
function myMovie(movie){
var movie = process.argv[2];
	console.log("title: ", movie)
	// Request via OMDB API
	request("http://www.omdbapi.com/?t=" + movie  + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
	  // If the request is successful (i.e. if the response status code is 200)
	  if (!error && response.statusCode === 200) {
		// Parse the body of the site and recover just the imdbRating
		// (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
		console.log("Direcor: " + JSON.parse(body).Director +
			"\nYear: " + JSON.parse(body).Year +
			"\nActors: " + JSON.parse(body).Actors +
			"\nPlot: " + JSON.parse(body).Plot);
	  }else{
		  console.log("try another movie");
	  }
	});
}






