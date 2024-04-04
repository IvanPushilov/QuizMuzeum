'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({Comment}) {
      this.hasMany(Comment, {foreignKey:'post_id'})
    }
  }
  Post.init({
    title: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull:true,
    },
    file: {    
      type: DataTypes.BLOB,
      allowNull: true,
    },
    date:{ 
      type: DataTypes.DATE,
    defaultValue: new Date(),
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};