require("dotenv").config()

const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./dbConnect')
connectDB()

const PORT = 8080

app.use(express.json())
app.use(cors())

mongoose.connection.once('open', () => {
  console.log("connected to MongoDB")
  app.listen(
    PORT,
    () => console.log(`i'm alive at http://localhost:${PORT}`)
  )
})
