const express = require('express')
const router = express.Router()

const { getAllCategories, addCategory } = require('../controllers/categories.js')

// Fetch 
router.get('/get/all', getAllCategories)

// Create
router.post('/post', addCategory);

module.exports = router
