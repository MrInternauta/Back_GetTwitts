var Twitter = require('twitter');
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

  console.log("estado");
var client = new Twitter({
  consumer_key: 'xxxxxxx',
  consumer_secret: 'qcTSj2xxxxxxxTcxxOfToXPf3xxxxxxxxxFS5t',
  access_token_key: '19680898xxxxxEfaB6VLtpaYrhxxxxxqBNu',
  access_token_secret: 'JGFnbpopAxxxxxxxxxxxxxxxxVZz1Gg'
});

var params = {screen_name: 'MRinternauta',
              count: 1};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  var Postes = tweets.map(function(o) {

      return Object.keys(o).reduce(function(array, key) {
          return array.concat([key, o[key]]);
      }, []);
  });
  var estado = Postes[0][7];
  console.log(estado);
});
