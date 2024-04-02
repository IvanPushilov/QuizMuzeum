'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({Questions, UserAnswers}) {
      this.belongsTo(Questions, {foreignKey: 'question_id'})
      this.hasMany(UserAnswers, {foreignKey: 'answer_id'})
    }
  }
  Answer.init({
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions',
        key: 'id'
      }
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};