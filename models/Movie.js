const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
  },
  imdbid : {
  				type : String,
  },
  poster: {
  		 type: String,
  },
 		type: {
  				type: String
  },
  year: {
  			 type: String
  }
});


const Movie = mongoose.model("movies", movieSchema);

module.exports = { Movie };
