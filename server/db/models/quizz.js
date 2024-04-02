'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quizz extends Model {
    static associate({Question}) {
      this.hasMany(Question, {foreignKey:'quizz_id'})
    }
  }
  Quizz.init({
    title: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Quizz',
  });
  return Quizz;
};