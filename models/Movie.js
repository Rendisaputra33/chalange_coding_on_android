const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
  },
  poster: {
  		 type: String,
  },
  plot: {
  				type: String
  },
  rating: {
  				type: Number,
  },
  genre: {
  				type: String
  },
  year: {
  				year: String
  }
});


const Movie = mongoose.model("movies", movieSchema);

module.exports = { Movie };
