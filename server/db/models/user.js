'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({UserAnswers, UserWriteAnswers, Comments}) {
      this.hasMany(UserAnswers, {foreignKey: 'user_id'})
      this.hasMany(UserWriteAnswers, {foreignKey: 'user_id'})
      this.hasMany(Comments, {foreignKey: 'user_id'})
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }, 
    role:{
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'user',
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
