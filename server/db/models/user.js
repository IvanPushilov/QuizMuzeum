'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({UserAnswer, UserWriteAnswer, Comment}) {
      this.hasMany(UserAnswer, {foreignKey: 'user_id'})
      this.hasMany(UserWriteAnswer, {foreignKey: 'user_id'})
      this.hasMany(Comment, {foreignKey: 'user_id'})
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
    img:{
      type: DataTypes.TEXT,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
