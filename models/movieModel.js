const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovieSchema = new Schema({
    Title: {type: String, required: true},
    Year: {type: String, required: true},
    Rated: {type: String, required: true},
    Released: {type: String, required: true},
    Runtime: {type: String},
    Genre: {type: String, required: true},
    Director: {type: String, required: true},
    Writer: {type: String},
    Actors: {type: String},
    Plot: {type: String},
    Language: {type: String, required: true},
    Country: {type: String},
    Awards: {type: String},
    Poster: {type: String, required: true},
    Metascore: {type: String},
    imdbRating: {type: String},
    imdbVotes: {type: String},
    imdbID: {type: String},
    Type: {type: String},
    Response: {type: String},
    Images: {type: Array},
    User:{type: String}
});


// Export the model
module.exports = mongoose.model('movie', MovieSchema, 'movie');