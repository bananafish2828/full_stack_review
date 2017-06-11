//TODO: set up your database configuration and connection here

const Sequelize = require('sequelize')
// ** remember to hide your db config information!
const config = require('../config/srvconfig') 

// **other files will need access to information in here**
var db = new Sequelize(config.dbURL);

db.authenticate()
  .then(() => {
    console.log('connected to blockbuster db')
  })
  .catch((err) => {
    console.log('error connecting to database ', err)
  })

  module.exports = db
