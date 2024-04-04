'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Tournament, Answer, UserAnswer, UserWriteAnswer}) {
     this.hasMany(UserAnswer, {foreignKey:'question_id'})
     this.belongsTo(Tournament, {foreignKey:'tournament_id'})
     this.hasMany(UserWriteAnswer, {foreignKey:'question_id'})
     this.hasMany(Answer, {foreignKey:'question_id'})
    }
  }
  Question.init({
    tournament_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Tournaments",
        key: "id",
      },
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};