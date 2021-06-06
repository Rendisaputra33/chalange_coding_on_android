const express = require("express")
const route = express.Router()
const { MovieController } = require("../controllers/MovieController")

route.get("/all", async (req, res) => await new MovieController().getAll(req, res))

route.get("/detail/:id", async (req, res) => await new MovieController().getOne(req, res))

route.post("/addMovie", async (req, res) => await new MovieController().addMovie(req, res))

module.exports = route
