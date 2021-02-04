const axios = require("axios")
const WEATHERKEY = process.env.WEATHERKEY

class Controller {
    static postLogin(req,res,next){

    }
    static postRegister(req,res,next){

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
    static getAlquran(req,res,next){

    }
    static getKisah(req,res,next){

    }
    static putSetting(req,res,next){

    }
    static postGoogle(req,res,next){

    }
    static getWeather(req, res, next){
        let location = req.decoded.city
        axios.get(`http://api.weatherbit.io/v2.0/current?city=${location}&key=${WEATHERKEY}`)
        .then(weather => {
            res.status(200).json(weather.data)
        })
        .catch(err => {
        res.status(500).json(err)
        })
    }
}

module.exports = Controller