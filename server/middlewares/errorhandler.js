function errorHandler (err,req,res,next) {
  switch(err.name) {
    case 'SequelizeUniqueConstraintError':
      let errorValidations = err.errors.map(err => err.message)
      res.status(400).json({ error: errorValidations })
      break
    case 'SequelizeValidationError':
      errorValidations = err.errors.map(err => err.message)
      res.status(400).json({ error: errorValidations })
      break
    case 'error_404':
      res.status(404).json({ error: err.msg })
      break
    case 'error_401':
      res.status(401).json({ error: err.msg })
      break
    case 'error_400':
      res.status(400).json({ error: err.msg })
      break
    default:
      res.status(500).json({ error: 'Internal Server Error' })
      break
  }
}

module.exports = errorHandler
