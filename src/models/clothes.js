'use strict';

// Our table schema
const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {

    clothType: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    clothSize: {
      type: DataTypes.STRING,
    }
  });
  
  module.exports = clothes;