const { User } = require('../models/');

const authorization = (req, res, next) => {
  const id = +req.params.id;

  User.findByPk(id)
    .then(user => {
      if (!user) throw { name: "error_404", msg: 'Error Not Found', status: 404 };

      if (user.id === +req.decoded.id) {
        next();
      } else {
        throw { name: "error_401", msg: 'You are not authorized to access', status: 401 };
      }
    })
    .catch(err => {
      next(err);
    })
}

module.exports = authorization;