'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({Publication, User}) {
      this.belongsTo(Publication, {foreignKey: 'publication_id'}),
      this.belongsTo(User, {foreignKey: 'user_id'})
        }
  }
  Comment.init({
    title: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'Users',
        key: 'id',
      },

      onDelete: 'CASCADE',
    },
    publication_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'Publications',
        key: 'id',
      }
    },
    date:{ 
      type: DataTypes.DATE,
    defaultValue: new Date(),
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};