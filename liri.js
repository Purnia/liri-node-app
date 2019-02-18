
require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var moment = require('moment');
var fs = require("fs");

//spotify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);



// //OMBD and BANDS API
// var ombd = (keys.ombd);
// var bandsInTown = (keys.bandsInTown);

var Input = process.argv[2];
var query = process.argv.slice(3).join(" ")

//determines the command select
//based on command runs appropriate function call

if (Input === "concert-this") {
    console.log("upcoming band performances");
    concertThis(query);

}

else if (Input === "spotify-this-song") {
    console.log("Here is info on your song! ");
    spotifyThisSong(query);
}

else if (Input === "movie-this") {
    console.log("here is info on your movie! ");
    movieThis(query);
}

else if (Input === "do-what-it-says") {
    console.log("your wish is my command! ");
    doWhatItSays();
}

else {
    console.log("Your request is invalid");
}

//"concert-this" function
// run a request with axios to the bands in town API with the band specified
function concertThis() {
    var queryUrl = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp";
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            // console.log(response.data);
            // Place the response.data into a variable, concertData.
            for (var i = 0; i < response.data.length; i++) {
                console.log("Venue: " + response.data[i].venue.name + "\nLocation: " + response.data[i].venue.city + response.data[i].venue.region + "\nDate of Event: " + response.data[i].datetime);
            }
        }
    );

}

//"spotify-this-song" function
//run request to spotify API with the band specified

function spotifyThisSong(){
    spotify.search({ type: 'track', query: query })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
 var songData = response.tracks.items;
 for ( var i = 0; i < songData.length; i++){

 }

}

//"movie-this" function
// run a request with axios to the OMBD API with the movie specified
 function movieThis(){
     if(!query){
         query= "Mr.Nobody"
     }
     var searchUrl = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=trilogy"
    // console.log(queryUrl);

    axios.get(searchUrl).then(
        function (response) {
            // console.log(response.data);
            console.log("Title: " + response.data.Title + "\nRelease Date: " + response.data.Released + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors);

            
        }
    );

    }
 
//"do-what-it-says" function
//pull text from inside random.txt and use it to call commands 

function doWhatItSays(){
    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }
      
        // We will then print the contents of data
        console.log(data);
        var dataArr = data.split(",");
        Input = dataArr[0];
        query= dataArr[1];

        console.log(query);
        if (Input === "concert-this") {
            console.log("upcoming band performances");
            concertThis(query);
        
        }
        
        else if (Input === "spotify-this-song") {
            console.log("Here is info on your song! ");
            spotifyThisSong(query);
        }
        
        else if (Input === "movie-this") {
            console.log("here is info on your movie! ");
            movieThis(query);
        }
        
        else if (Input === "do-what-it-says") {
            console.log("your wish is my command! ");
            doWhatItSays();
        }
        
        else {
            console.log("Your request is invalid");
        }
        


      
        
      });

}

