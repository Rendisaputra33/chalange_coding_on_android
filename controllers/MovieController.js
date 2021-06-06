const { Movie } = require("../models/Movie")

class MovieController {

	getMovie = async () => await Movie.find()

	getSingle = async (_id) => await Movie.findOne({ _id: _id })

	add = async (value) => await Movie.create({ ...value })

	async getAll(req, res) {
		const movie = await this.getMovie()
		res.json({
			success: true,
			data: movie
		})
	}

	async getOne(req, res) {
		const one = await this.getSingle(req.id)
		res.json({
			success: true,
			data: one
		})
	}

	async addMovie(req, res) {

		const dataSubmit = {
			title: req.body.title,
			imdbid: req.body.imdbid,
			poster: req.body.poster,
			type: req.body.type,
			year: req.body.year
		}

		console.log(dataSubmit)

		//const data = await this.add({ ...dataSubmit })
		res.json({
			success: true,
			// data : data
		})
	}

}

module.exports = { MovieController }
