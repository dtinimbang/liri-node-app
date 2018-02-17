# liri-node-app

# Liri-Twitter

This allows the user to call my last 20 tweets.  I did this by grabbing the necessary keys and placing them in the .env folder.

NPM used was TWITTER.

To retrieve the titter data you must type

node liri.js my-tweets


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





var Spotify = require('node-spotify-api');