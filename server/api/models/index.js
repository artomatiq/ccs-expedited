'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process'); // import the process module
const basename = path.basename(__filename); // get the base name of the current file
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../data/config/config.json')[env];
const db = {};


//CREATING A NEW SEQUELIZE INSTANCE

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config); // create a new Sequelize instance using the environment variable
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config); // create a new Sequelize instance using the config object
}


//ADDING THE MODELS TO THE DB OBJECT

fs
  .readdirSync(__dirname) // read the contents of the current directory
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && // ignore hidden files
      file !== basename && // ignore the index.js file
      file.slice(-3) === '.js' && // only read .js files
      file.indexOf('.test.js') === -1 // ignore test files
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model; // add the model to the db object using its name
  });

//ASSOCIATING THE MODELS

Object.keys(db).forEach(modelName => { 
  if (db[modelName].associate) { // check if the model has an associate method
    db[modelName].associate(db); // call the associate method on each model
  }
});

db.sequelize = sequelize; // add the sequelize instance to the db object
db.Sequelize = Sequelize; // add the Sequelize module to the db object

module.exports = db;
