const bcrypt = require("../libs/bcrypt")

const hashPass = (pw) => {
				var hashres = ""
				bcrypt.hash(pw, (err, hash) => {
								hashres = hash
				})
				return hashres
}

const comparePass = (pw, hash) => {
				var comparep = false
				bcrypt.compare(pw, hash, (err, res) => {
								comparep = res
				})
				return comparep
}



module.exports = { hashPass, comparePass }
