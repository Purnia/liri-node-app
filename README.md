# liri-node-app
LIRI is a command line node app that takes in parameters and gives you back data.
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. 

## Commands

Users can run following commands on Git Bash (Windows) or Terminal (Mac) to search for results:

 1. concert-this: This will search the Bands in Town Artist Events API using Axios and return the following results
    * Name of the venue

     * Venue location

     * Date of the Event 

 2. spotify-this-song: This will search the Spotify API and return the following results

     * Artist(s)

     * The song's name
 
     * A preview link of the song from Spotify

     * The album that the song is from

    * If no song is provided then your program will default to "The Sign" by Ace of Base.

 3. movie-this: This will search the OMBD API using Axios and return the following results

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

4. do-what-it-says: Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.




