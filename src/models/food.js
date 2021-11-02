'use strict';

// Our table schema
const Food = (sequelize, DataTypes) => sequelize.define('food', {

    mealName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    mealType: {
      type: DataTypes.STRING,
    }
  });
  
  module.exports = Food;