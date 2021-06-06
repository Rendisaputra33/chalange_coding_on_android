const bcrypt = require("bcryptjs")

const hash = (pw, cal) => {
				bcrypt.genSalt(10, (err, salt) => {
								bcrypt.hash(pw, salt, (err, hash) => {
												cal(null, hash)
								})
				})
}

const compare = (pw, hash, cal) => {
				bcrypt.compare(pw, hash, (err, res) => {
								cal(null, res)
				})
}

module.exports = { hash, compare }