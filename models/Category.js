const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  title: String,
  catId: Number,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
