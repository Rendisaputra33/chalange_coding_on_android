const bcrypt = require("bcrypt")

const hashPass = async (pw, salt = 10) => {
				try {
								const hash = await bcrypt.hash(pw, salt)
								if(hash) return hash
				} catch(e) {
								console.log(e)
				}
}

const comparePass = async (pw, hash) => {
				try {
								return await bcrypt.compare(pw, hash)		
				} catch(e) {
								console.log(e)
				}
}



module.exports = { hashPass, comparePass }
