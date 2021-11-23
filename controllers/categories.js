const { sendError, createError } = require('./commonUtils.js')

const Category = require('../models/Category.js')

const getAllCategories = async (req, res) => {
  try {
    const data = await Category.find()
    res.status(200).json(data)
  } catch (error) {
    sendError(error, res)
  }
}

const addCategory = async (req, res) => {
  const data = req.body
  const categoryData = new Category(data)
  try {
    await categoryData.save()
    res.status(201).json(categoryData)
  } catch (error) {
    createError(error, res)
  }
}

module.exports = {
  getAllCategories,
  addCategory
}
