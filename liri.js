
require("dotenv").config();

var axios = require("axios");
var moment = require('moment');
var fs = require("fs");
var keys = require("./keys.js");
//spotify
var spotify = require("node-spotify-api");
var spotify = new spotify(keys.spotify);

//OMBD and BANDS API
var ombd = (keys.ombd);
var bandsInTown = (keys.bandsInTown);

var Input= process.argv[2];
var Query= process.argv.slice(3).join(" ")



