function errorHandler (err,req,res,next) {
  console.log(err);
  // const errors = err.errors.map(el => el.message)
  const error = err.msg
  const status = err.status
  switch (err.name) {
    case "SequelizeValidationError":
      res.status(400).json({ error })
      break;
      case "SequelizeUniqueConstraintError":
      res.status(400).json({ error })
      break;
    case "error_404":
      res.status(status).json({ error })
      break;
    case "error_401":
      res.status(status).json({ error })
      break;
    default:
      res.status(500).json("Internal Server Error")
      break;
  }
}

module.exports = errorHandler
