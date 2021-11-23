const express = require('express')
const router = express.Router()

const {
  getAllFeedbacks,
  getTopFeedbacks,
  postFeedback,
} = require('../controllers/feedbacks.js')

// Get Project Routes
router.get('/get/all', getAllFeedbacks)
router.get('/get/top', getTopFeedbacks)

// // Create Project
router.post('/post', postFeedback)

module.exports = router
