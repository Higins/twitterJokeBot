const Twit = require('twit');
const giveMeAJoke = require('give-me-a-joke');
const config = require('./config');
var T = new Twit(config);

function joke() {
  giveMeAJoke.getRandomDadJoke (function(joke) {
  tweetIt(joke);
});

}
function tweetIt(txt) {
  T.post('statuses/update', { status: txt }, function(err, data, response) {
    if(err) {
      console.log('Fail: ' + err);
    } else {
      console.log(data);
    }
  })
}


setInterval(joke,1000*20);
