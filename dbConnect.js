const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI)
    // await mongoose.connect("mongodb://localhost:27017/testdb")
  } catch (e) {
    console.error(e)
  }
}

module.exports = connectDB