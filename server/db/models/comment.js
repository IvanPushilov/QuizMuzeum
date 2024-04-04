'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({Post, User}) {
      this.belongsTo(Post, {foreignKey: 'post_id'}),
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
    post_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'Posts',
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