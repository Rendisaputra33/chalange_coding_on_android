const express = require("express")
const route = express.Router()
const auth = require ("../middlewares/Auth")
const { UserController } = require("../controllers/UserController")

route.get("/get", async (req, res) => await new UserController().get(req, res))

route.post("/login", async (req, res) => await new UserController().login(req, res))

module.exports = route
