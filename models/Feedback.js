const mongoose = require('mongoose')

const feedbackSchema = mongoose.Schema({
  title: String,
  projectId: String,
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports = Feedback
