'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    static associate(Comments) {
      this.hasMany(Comments, {foreignKey:'publication_id'})
    }
  }
  Publication.init({
    title: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    image: {
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
    modelName: 'Publication',
  });
  return Publication;
};