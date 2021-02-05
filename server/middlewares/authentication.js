const { verify } = require('../helpers/jwt')

const authentication = function (req, res, next) {
  console.log('authen');
  try {
    const token = req.headers.token
    const decoded = verify(token)
    
    req.decoded = decoded
    console.log(req.decoded);
    next()
  } catch (err) {
    next({ name: "error_401", status : 401, msg: 'Invalid Token'})
  }
}

module.exports = authentication