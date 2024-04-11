'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model {
    static associate({Question}) {
      this.hasMany(Question, {foreignKey:'tournament_id'})
    }
  }
  Tournament.init({
    title: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    info: {
      type: DataTypes.TEXT
    },
    img: {
      type: DataTypes.TEXT
    },
    time: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Tournament',
  });
  return Tournament;
};