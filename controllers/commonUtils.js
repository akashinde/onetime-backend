const sendError = (error, res) => {
  res.status(404).json({ Message: error })
  console.log('ERROR:', error)
}

const createError = (error, res) => {
  res.status(500).json({ Message: error })
  console.log('ERROR:', error)
}

module.exports = {
  sendError,
  createError
}
