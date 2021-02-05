const express = require("express")
const router = express.Router()
const Controller = require("../controller/controller")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")


router.post("/login",Controller.postLogin)
router.post("/register",Controller.postRegister)
router.post("/login-google",Controller.postGoogle)
router.use(authentication)
router.get("/jadwal-sholat",Controller.getJadwal)
router.get("/weather", Controller.getWeather)
router.get("/alquran",Controller.getAlquran)
router.get("/kisah-nabi",Controller.getKisah)
router.get("/setting/:id", authorization, Controller.getMyUser)
router.put("/setting/:id", authorization, Controller.putSetting)

module.exports = router
