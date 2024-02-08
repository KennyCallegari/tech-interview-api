const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  itemName: String,
  quantity: Number,
  price: Number
})

module.exports = mongoose.model("Item", itemSchema)