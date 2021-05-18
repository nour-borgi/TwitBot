// var TwitterPackage = require('twitter');
// var request = require('request');
var express = require('express');
require('./src/bot')

console.log("Hello World! I am a twitter bot!");

const app = express()

app.get('/',function(request, response){
response.send("hello")
})

app.get('/webhook/twitter', function(request, response) {
    // response.send("hello")
    var crc_token = request.query.crc_token
  
    if (crc_token) {
      var hash = security.get_challenge_response(crc_token, auth.twitter_oauth.consumer_secret)
      console.log("yes I have the crc_token");
      console.log("request")
      response.status(200);
      response.send({
        response_token: 'sha256=' + hash
      })
    } else {
      response.status(400);
      response.send('Error: crc_token missing from request.')
    }
  })
  

app.listen(3000, function() {
    console.log('Node app is running on port 3000')
  })
  

//--------tracking tweets
// var Twitter = new TwitterPackage(secret);

// var hashtag = '#TN'; //put any hashtag to listen e.g. #brexit
// console.log('Listening to:' + hashtag);

// Twitter.stream('statuses/filter', {track: hashtag}, function(stream) {
// stream.on('data', function(tweet) {
// console.log('Tweet:@' + tweet.user.screen_name + 
// '\t' + tweet.text);
// console.log('------') 
// });
// stream.on('error', function(error) {
// console.log(error);
// });
// });



