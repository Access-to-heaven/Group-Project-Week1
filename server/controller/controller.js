const axios = require("axios")
const { User } = require("../models/")
const { hash, comparePassword } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")

class Controller {
  static postLogin(req,res,next){
    const { email, password } = req.body
    User.findOne({
      where: { email }
    })
    .then((user) => {
      if (!user) throw { name: "error_400", status: 400, msg: "Invalid email or password" }
      
      const resultCompare = comparePassword(password, user.password)
      
      if (!resultCompare) throw { name: "error_400", status: 400, msg: "Invalid email or password" }
      console.log('<<<<<<< LOGIN');
      
      const access_token = generateToken({
        id: user.id,
        email: user.email,
        city: user.city
      })
      
      console.log(access_token, "<<<ACCESS TOKEN");
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

  static getAlquran(req,res,next){
    axios.get("https://api.npoint.io/99c279bb173a6e28359c/data")
    .then(data => {
      res.status(200).json(data.data)
    })
    .catch(err => {
      next(err)
    })
  }

  static getMyUser(req, res, next) {
    User.findByPk(+req.decoded.id)
    .then((data) => {
      res.status(200).json(data)  
    })
    .catch((err) => {
      next(err)
    });
  }
  
  static putSetting(req,res,next){
    const id = +req.params.id
    const { name, email, currentPassword, newPassword, city } = req.body 
    
    User.findByPk(id)
    .then(data => {
      const comparedPass = comparePassword(currentPassword, data.password)
      if(!comparedPass){
        throw { name: "error_400", status: 400, msg : 'Password did not match!' }
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
      res.status(200).json({data: data[1][0]})
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
  }

  static getWeather(req, res, next){
    let location = req.decoded.city
    axios({
      method: 'GET',
      url: `http://api.weatherbit.io/v2.0/current?city=${location}&key=${process.env.WEATHERKEY}`
    })
    .then(weather => {
      res.status(200).json(weather.data)
    })
    .catch(err => {
      next(err)
    })
  }

  static getKisah(req,res,next){
    const nabi = req.body.nabi || 'adam'
    let input = nabi.toLowerCase();
    axios({
      method: 'GET',
      url: `https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=${input}`
    })
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((err) => {
      next(err)
    })
  }

  static postGoogle(req,res,next){
    const client = new OAuth2Client(process.env.CLIENT_ID)
    let email;
    let isExist = false

    client.verifyIdToken({
      idToken: req.body.googleToken,
      audience: process.env.CLIENT_ID
    })
      .then(ticket => {
        const payload = ticket.getPayload();
        email = payload.email;
        console.log(payload);
        return User.findOne({ where: { email } })
      })
      .then(user => {
        if (user) {
          isExist = true;
          return user;
        } else {
          return User.create({
            email,
            password: process.env.DEFAULT_PASSWORD_GOOGLE
          })
        }
      })
      .then(user => {
        const access_token = generateToken({
          id: user.id,
          email: user.email,
          city: user.city
        })
        
        if (isExist) {
          res.status(200).json({ access_token })
        } else {
          res.status(201).json({ access_token })
        }
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = Controller