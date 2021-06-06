const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {

	const token = req.cookies.x_auth

	try {
		const decode = jwt.verify(token, process.env.SECRET_KEY)
		if (decode) return next()
	} catch (e) {
		return res.status(401).json({
			status: "unauthorized",
			message: "invalid token, cant access this page"
		})
	}

}