const express = require("express")
const router = express.Router()
const Controller = require("../controller/controller")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

// router.post("/login",Controller.postLogin)
// router.post("/register",Controller.postRegister)
router.get("/jadwal-sholat",Controller.getJadwal)
router.get("/weather", Controller.getWeather)
// router.get("/alquran",Controller.getAlquran)
// router.get("/kisah-nabi",Controller.getKisah)
// router.put("/setting/:id",Controller.putSetting)
// router.post("/login-google",Controller.postGoogle)

module.exports = router
