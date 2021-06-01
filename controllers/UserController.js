const { User } = require("../models/User")

class UserController {

				getUser = async () => await User.find()

				async get(req, res) {
								const user = await this.getUser()
								res.json({
												success : true,
												dataUser : user
								})
				}
			
				async login(req, res) {
								res.json({
												loginSuccess : true,
												data : {
																nama : "rendi saputra",
																kelas : " xi rpl c",
																email : "gorengmbah@gmail.com"
												}
								})
				}
}


module.exports = {
			UserController
}
