const axios = require('axios')
const { User } = require('../models')
const { comparePassword, hash } = require('../helpers/bcrypt')

class Controller {
  static postLogin(req,res,next){

  }
  static postRegister(req,res,next){

  }
  static getJadwal(req,res,next){

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

    static getKisah(req,res,next){

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

    static postGoogle(req,res,next){

    }
}

module.exports = Controller