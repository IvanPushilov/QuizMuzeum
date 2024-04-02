'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Quizzes, Answers, UserAnswers, UserWriteAnswers}) {
     this.hasMany(UserAnswers, {foreignKey:'question_id'})
     this.belongsTo(Quizzes, {foreignKey:'quizz_id'})
     this.hasMany(UserWriteAnswers, {foreignKey:'question_id'})
     this.hasMany(Answers, {foreignKey:'question_id'})
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