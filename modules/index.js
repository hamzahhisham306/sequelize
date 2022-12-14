'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.model')



const POSTGRES_URL = process.env.HEROKU_POSTGRESQL_MAUVE_URL || process.env.DATABASE_URL;





const sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

let sequelize = new Sequelize(POSTGRES_URL,sequelizeOption,{
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {},
    
});

module.exports = {
  db: sequelize,
  Food: food(sequelize, DataTypes)
}
