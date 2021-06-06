const express = require("express")
const app = express()
const morgan = require("morgan")
const body = require("body-parser")
const cookie = require("cookie-parser")
const env = require("dotenv").config()
const database = require("./configs/Connection")
const userRoute = require("./routes/User")
const movieRoute = require("./routes/Movie")
const cors = require("cors")


// initial connection from datavase
database.connection()
// setup logger for development mode
app.use(morgan("dev"))
// setup cookie parser
app.use(cookie())
// setup body parser
app.use(body.urlencoded({ extended: true }))
// app.use(body.json())
// routing api users
app.use("/api/user/", userRoute)
//routing api movie
app.use("/api/movie/", movieRoute)
// setup static file for documentasion api
app.use(express.static('public'))
// routing documentasion api
app.get("/", (req, res) => res.sebdFile('public/index.html'))
// start server 
app.listen(process.env.PORT, () => console.log(`server run on ${process.env.PORT}`))

app.use(cors({
				origin : 'http://localhost:3000'
}))
