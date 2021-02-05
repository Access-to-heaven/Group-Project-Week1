const { User } = require('../models/');

const authorization = (req, res, next) => {
  const id = +req.params.id
  User.findByPk(id)
    .then((data) => {
      if(!data) throw { name: "error_404", status: 404, msg: 'Error Not Found'}
      if (data.id === req.decoded.id) {
        next()
      } else {
        throw { name: "error_401", status: 401, msg: 'Access denied!! you not authorized'}
      }
    })
    .catch((err) => {
      next(err)
    });
}

module.exports = authorization;