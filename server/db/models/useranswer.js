'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAnswer extends Model {
    static associate({Users, Questions, Answers}) {
      this.belongsTo(Users, {foreignKey: 'user_id'})
      this.belongsTo(Questions, {foreignKey: 'question_id'})
      this.belongsTo(Answers, {foreignKey: 'answer_id'})
    }
  }
  UserAnswer.init({
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
        key: 'id'
      }
    },
    answer_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'Answers',
        key: 'id'
      }
    },
    
  }, {
    sequelize,
    modelName: 'UserAnswer',
  });
  return UserAnswer;
};