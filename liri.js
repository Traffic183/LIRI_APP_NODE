require("dotenv").config();

const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const keys = require("./keys");

const request = require("request");

const fs = require("fs");

const spotify = new Spotify(keys.spotify);

let getArtistName = (artist) => {
  return artist.name;
 };
 let getSpotify = (songName) => {
  if (songName === undefined) {
    songName = "The Sign";
  }

  spotify.search(
    {
      type: "track",
      query: songName
    },
    function(err, data) {
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }
      let songs = data.tracks.items;

      for (let i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("artist(s): " + songs[i].artists.map(getArtistName));
        console.log("song name: " + songs[i].name);
        console.log("preview song: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log(" *   *   *   *   *");
      }
    }
  );
};
let myTweets = function() {
 let client = new Twitter(keys.twitter);

  let params = {
    screen_name: "LevyTX"
  };
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      for (let i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);
      }
    }
  });
};
let movieThis = function(movieName) {
  if (movieName === undefined) {
    movieName = "Fanny and Alexander";
  }

  let urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=454a6e93";

  request(urlHit, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      let jsonData = JSON.parse(body);

      console.log("\nTitle: " + jsonData.Title);
      console.log("\nYear: " + jsonData.Year);
      console.log("\nRated: " + jsonData.Rated);
      console.log("\nIMDB Rating: " + jsonData.imdbRating);
      console.log("\nCountry: " + jsonData.Country);
      console.log("\nLanguage: " + jsonData.Language);
      console.log("\nPlot: " + jsonData.Plot);
      console.log("\nActors: " + jsonData.Actors);
      console.log("\nRotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
    }
  });
};

let doWhatItSays = function() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    console.log(data);

    let dataArr = data.split(",");

    if (dataArr.length === 2) {
      pick(dataArr[0], dataArr[1]);
    }
    else if (dataArr.length === 1) {
      pick(dataArr[0]);
    }
  });
};

let pick = function(caseData, functionData) {
  switch (caseData) {
  case "my-tweets":
    myTweets();
    break;
  case "spotify-this-song":
    getSpotify(functionData);
    break;
  case "movie-this":
    movieThis(functionData);
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
  default:
    console.log("LIRI doesn't know that");
  }
};

let runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);