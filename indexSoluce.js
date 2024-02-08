require("dotenv").config()

const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./dbConnect')
connectDB()

const Item = require("./ItemModelSoluce")

const PORT = 8080

app.use(express.json())
app.use(cors())

app.get('/items', async (req, res) => {
  const items = await Item.find().lean()

  res.status(200).send({
    items: items
  })
})

app.post('/items', async (req, res) => {
  const itemName = req.body.name

  if (!itemName) res.status(403).send({ message: "t'as tu pas mis de name, tabarnak" })

  await Item.create({ itemName: itemName, quantity: 1, price: 0 })

  const items = await Item.find().lean()

  res.status(200).send({
    items: items
  })
})

app.put('/items/:id', async (req, res) => {
  const id = req.params.id
  const { quantity, price } = req.body

  await Item.findOneAndUpdate({ _id: id }, { $set: { quantity: quantity, price: price } }).lean();

  const items = await Item.find().lean()

  res.status(200).send({
    items: items
  })
})

mongoose.connection.once('open', () => {
  console.log("connected to MongoDB")
  app.listen(
    PORT,
    () => console.log(`i'm alive at http://localhost:${PORT}`)
  )
})


