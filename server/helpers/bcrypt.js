const bcrypt = require('bcryptjs');

function hash(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

function comparePassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = { hash, comparePassword };