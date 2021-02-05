const { verify } = require('../helpers/jwt')

const authentication = function (req, res, next) {
  try {
    const token = req.headers.token
    const decoded = verify(token)

    req.decoded = decoded

    next()
  } catch (err) {
    next({name: "error_401", status : 401, msg: 'Invalid Token'})
  }
}

module.exports = authentication