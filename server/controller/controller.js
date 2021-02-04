const axios = require("axios")
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

  static getJadwal(req,res,next){
    let location = req.decoded.city
    let time = new Date()
    let year = time.getFullYear()
    let month = ""
    let date = ""
    if (time.getMonth() + 1 < 10){
      month = "0" + (time.getMonth() + 1)
    } else {
      month = (time.getMonth() + 1)
    }
    if (time.getDate() + 1 < 10){
      date = "0" + time.getDate()
    } else {
      date = time.getDate()
    }
    let today = `${year}-${month}-${date}`
    axios.get(`https://api.pray.zone/v2/times/day.json?city=${location}&date=${today}`)
    .then(jadwal => {
      res.status(200).json(jadwal.data)
    })
    .catch(err => {
      res.status(500).json(err)
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

  static getAlquran(req,res,next){
    axios.get("https://api.npoint.io/99c279bb173a6e28359c/data")
    .then(data => {
      res.status(200).json(data.data)
    })
    .catch(err => {
      next(err)
    })
  }
  
  static putSetting(req,res,next){
    const id = +req.params.id
    const { name, email, currentPassword, newPassword, city } = req.body 
    
    User.findByPk(id)
    .then(data => {
      const comparedPass = comparePassword(currentPassword, data.password)
      if(!comparedPass){
        throw { name: 'PasswordDidNotMatch', message : 'Password did not match!' }
      }
      return User.update({
        name,
        email,
        password : hash(newPassword),
        city
      },{
        where : {
          id
        },
        returning : true
      })
    })
    .then(data => {
      res.status(200).json({data})
    })
    .catch(err => {
      console.log(err)
      //next(err)
    })
  }

  static getWeather(req, res, next){
    let location = req.decoded.city
    axios.get(`http://api.weatherbit.io/v2.0/current?city=${location}&key=${process.env.WEATHERKEY}`)
    .then(weather => {
      res.status(200).json(weather.data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
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

  static postGoogle(req,res,next){
    
  }
}

module.exports = Controller