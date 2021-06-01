const { Movie } = require("../models/Movie")

class MovieController {

				getMovie = async () => await Movie.find()
				
				getSingle = async (_id) => await Movie.findOne({_id : _id})
				
				async getAll(req, res) {
								const movie = await this.getMovie()
								res.json({
												success : true,
												data : movie
								})
				}
				
				async getOne(req, res) {
								const one = await this.getSingle(req.id)
								res.json({
												success : true,
												data : one
								})
				}
				
}

module.exports = { MovieController }