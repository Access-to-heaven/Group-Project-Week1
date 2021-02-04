'use strict';
const {
  Model
} = require('sequelize');

const { hash } = require("../helpers/bcrypt")

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name:  DataTypes.STRING,
    email: {
      type:  DataTypes.STRING,
      validate: {
        isEmail: {msg: "not email format"}
      },
      unique: true
    },
    password: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {beforeCreate: (user,option) => {
      if (!user.city){
        user.city = "Jakarta"
      }
      user.password = hash(user.password)
    }}
  });
  return User;
};