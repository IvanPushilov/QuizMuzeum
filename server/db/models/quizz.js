'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quizz extends Model {
    static associate({Questions}) {
      this.hasMany(Questions, {foreignKey:'quizz_id'})
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