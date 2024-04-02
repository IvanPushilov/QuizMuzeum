'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserWriteAnswer extends Model {
    
    static associate({User, Question}) {
      this.belongsTo(User, {foreignKey: 'user_id'})
      this.belongsTo(Question, {foreignKey: 'question_id'})
        }
  }
  UserWriteAnswer.init({
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,

    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions',
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'UserWriteAnswer',
  });
  return UserWriteAnswer;
};