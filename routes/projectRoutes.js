const express = require('express')
const router = express.Router()

const {
  getAllProjects,
  getTopProjects,
  getProject,
  postProject,
} = require('../controllers/projects.js')

// Get Project Routes
router.get('/get/all', getAllProjects)
router.get('/get/top', getTopProjects)
router.get('/get/:id', getProject)

// Create Project
router.post('/post', postProject)

module.exports = router
