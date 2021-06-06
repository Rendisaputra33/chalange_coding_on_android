const express = require("express")
const app = express()
const morgan = require("morgan")
const body = require("body-parser")
const cookie = require("cookie-parser")
const env = require("dotenv").config()
const database = require("./configs/Connection")
const userRoute = require("./routes/User")
const movieRoute = require("./routes/Movie")
const cluster = require("cluster")
const os = require("os")

if (cluster.isMaster) {
	let cpuCore = os.cpus().length
	for (let i = 0; i < cpuCore; i++) {
		cluster.fork()
	}

	cluster.on('online', worker => {
		if (worker.isConnected()) console.log(`worker active ${worker.process.pid}`)
	})

	cluster.on('exit', worker => {
		if (worker.isDead()) console.log(`worker dead ${worker.process.pid}`)
		cluster.fork()
	})

} else {

	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
		next();
	});

	// initial connection from datavase
	database.connection()
	// start server 
	app.listen(process.env.PORT, () => console.log(`server run on ${process.env.PORT}`))
	// setup logger for development mode
	app.use(morgan("dev"))
	// setup cookie parser
	app.use(cookie())
	// setup body parser
	app.use(body.urlencoded({ extended: false }))
	app.use(body.json())
	// routing api users
	app.use("/api/user/", userRoute)
	//routing api movie
	app.use("/api/movie/", movieRoute)
	// setup static file for documentasion api
	app.use(express.static('public'))
	// routing documentasion api
	app.get("/", (req, res) => res.sendFile('public/index.html'))
}

