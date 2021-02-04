const { User } = require("../models/")
const { comparePassword } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")

class Controller {
  static postLogin(req,res,next){
    const { email, password } = req.body
    User.findOne({
      where: { email }
    })
      .then((user) => {
        if (!user) throw { status: 400, msg: "Invalid email or password" }

        const resultCompare = comparePassword(password, user.password)

        if (!resultCompare) throw { status: 400, msg: "Invalid email or password" }

        const access_token = generateToken({
          id: user.id,
          email: user.email,
          city: user.city
        })

        res.status(200).json({ access_token })
      })
      .catch((err) => {
        console.log(err)
        next(err)
      })

  }
  static postRegister(req,res,next){
    const { name, email, password, city } = req.body
    User.create({
      name, email, password, city
    })
      .then((newUser) => {
        res.status(201).json({
          id: newUser.id,
          email: newUser.email,
          city: newUser.city
        })
      })
      .catch((err) => {
        next(err)
      })
  }

  static getJadwal(req,res,next){

  }
  static getAlquran(req,res,next){

  }
  static getKisah(req,res,next){

  }
  static putSetting(req,res,next){

  }
  static postGoogle(req,res,next){
    
  }
  static postRegister(req,res,next){
    
  }
  static getJadwal(req,res,next){
    
  }
  static getAlquran(req,res,next){
    
  }
  static getKisah(req,res,next){
    const nabi = req.body.nabi || 'adam'
    axios({
      method: 'GET',
      url: `https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=${nabi}`
    })
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((err) => {
      next(err)
    })
  }
  static putSetting(req,res,next){
    
  }
  static postGoogle(req,res,next){
    
  }
}

module.exports = Controller