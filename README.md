# liri-node-app
All code used require to access NPM
# Liri-Twitter

This allows the user to call my last 20 tweets.  I did this by grabbing the necessary keys and placing them in the .env folder.

NPM used was TWITTER.

To retrieve the titter data you must type

node liri.js my-tweets

Example below:
node liri.js my-tweets

Result:

@DonMikeyBang Tweet 13 created on: Thu Feb 15 04:44:16 +0000 2018
Tweet 13 text: my goal for 2018 is a cartwheel

# Twitter API keys

TWITTER_CONSUMER_KEY=IyzEZNEud6uasOWwMWu2xBWSx
TWITTER_CONSUMER_SECRET=pcx8uzEzTtSMOUspx0ECZTj9FF4Qe31BmyshSBQdUgbp51j7dU
TWITTER_ACCESS_TOKEN_KEY=961084156603195392-fwa1G3SCngu5W3NxgnsBXjhUMCON6od
TWITTER_ACCESS_TOKEN_SECRET=13aZ6xB7iXSsTLjn8IaFGdnHymGykV0Je0yNZUEMvqytS

===============================================
# Liri-Spotify

Using the Npm node spotify api I was able to use this to call songs I search and it will display 
*artist
*songs name
*preview link
*album name

my spotify code is listed below which allows me to acess the API.

<!-- var spotify = new Spotify({
  id:'0d499989c18f44bbb8db45603dd8d54c',
  secret: 'cd329c9606454a2cac1de8375fad55d0'
}); -->

Call spotify by using
node liri.js spotify-this-song <song name>

Example:
node liri.js spotify-this-song thriller

Result:

===================-Artist========================
Michael Jackson
===================Song Name======================
Billie Jean
===================Preview Link===================
https://p.scdn.co/mp3-preview/4eb779428d40d579f14d12a9daf98fc66c7d0be4?cid=0d499989c18f44bbb8db45603dd8d54c
===================Album==========================
Thriller 25 Super Deluxe Edition


===============================================
# Liri-Movie

   This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
    
     ```



===============================================
# Liri-Random

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

Example:
node liri.js do-what-it-says

Result:
You requested to <spotify-this-song> with "I Want it That Way"
