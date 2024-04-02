'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Quizz, Answer, UserAnswer, UserWriteAnswer}) {
     this.hasMany(UserAnswer, {foreignKey:'question_id'})
     this.belongsTo(Quizz, {foreignKey:'quizz_id'})
     this.hasMany(UserWriteAnswer, {foreignKey:'question_id'})
     this.hasMany(Answer, {foreignKey:'question_id'})
    }
  }
  Question.init({
    quizz_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Quizzes",
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