const Project = require('../models/Project.js')

function sendError(error, res) {
  res.send(404).json({ Message: error.message })
  console.log('ERROR:', error.message)
}

const getAllProjects = async (req, res) => {
  try {
    const allProjects = await Project.find()
    res.status(200).json(allProjects)
  } catch (error) {
    sendError(error, res)
  }
}

const getTopProjects = async (req, res) => {
  try {
    const topProjects = await Project.find({ rating: { $gte: 4.5 } })
    res.status(200).json(topProjects)
  } catch (err) {
    sendError(err)
  }
}

const getProject = async (req, res) => {
  try {
    const { id } = req.params
    const project = await Project.findById(id)
    res.send(JSON.stringify(project))
  } catch (error) {
    console.log('ERROR:', error)
  }
}

const postProject = async (req, res) => {
  const projectBody = req.body
  const project = new Project(projectBody)

  try {
    await project.save()
    res.status(201).json(project)
  } catch (error) {
    sendError(error, res)
  }
}

module.exports = {
  getAllProjects,
  getProject,
  postProject,
  getTopProjects,
}
