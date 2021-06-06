const { User } = require("../models/User")
const { hashPass, comparePass } = require("../helpers/hash")

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
				
								const { email, password } = req.body
								const cek = await User.findOne({ email })
								
								if(!cek) res.json({
												success : false,
												message : "email salah"
								})
								if(comparePass(password, cek.password)) res.json({
												success : true,
												message : "login success"
								})
								return res.json({
												success : false,
												message : "password wrong"
								})
				}
				
				async register(req, res) {
				
								const {email, password, name} = req.body
								const cek = await User.findOne({ email })
								
								if(cek) return res.json({
												success : false,
												message : "email telah terdaftar"
								})
								
								const create = await User.create({
												email : email,
												name : name,
												password : hashPass(password)
								})
								
								if(create) return res.json({
												success : true,
												message : "berhasil membuat akun"
								})
								
								return res.json({
												success : false,
												message : "gagal membuat akun"
								})
				}
}


module.exports = { UserController }
