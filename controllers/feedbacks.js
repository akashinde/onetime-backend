const Feedback = require('../models/Feedback')

const { sendError, createError } = require('./commonUtils')

const getAllFeedbacks = async (req, res) => {
  try {
    const data = await Feedback.find()
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    sendError(error, res)
  }
}

const getTopFeedbacks = async (req, res) => {
  try {
    const data = await Feedback.find({ rating: { $gte: 4.5 } })
      .sort({ createdAt: -1 })
      .limit(3)
    res.status(200).json(data)
  } catch (error) {
    sendError(error, res)
  }
}

const postFeedback = async (req, res) => {
  const newFeedback = req.body
  const data = new Feedback(newFeedback)
  try {
    await data.save()
    res.status(201).json(data)
  } catch (error) {
    createError(error, res)
  }
}

module.exports = {
  getAllFeedbacks,
  getTopFeedbacks,
  postFeedback,
}
