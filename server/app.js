require("dotenv").config()
const express = require("express")

const cors = require("cors")
const app = express()
const port = 3000
const router = require("./router/index")
const errorHandler = require("./middlewares/errorhandler")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/",router)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`ported at : ${port}`)
})