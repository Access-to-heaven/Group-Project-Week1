const { User } = require('../models/');

const authorization = (req, res, next) => {
  if (User.id === req.decoded.id) {
    next()
  } else {
    next({ msg: 'You are not authorized to access', status: 401 })
  }
}

module.exports = authorization;