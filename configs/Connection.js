const mongoose = require("mongoose")

const connection = () => {

		const url = process.env.MONGO_URI

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("connection success"));
 
}

module.exports = { connection }
