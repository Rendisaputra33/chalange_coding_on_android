const jwt = require("jsonwebtoken")

const createToken = (payload) => {
				try{
								const token = jwt.sing({ ...payload }, process.env.SECRET_KEY)
								if(token) return token
				} catch(e) {
								console.log(e)
				}
}

module.exports = { createToken }