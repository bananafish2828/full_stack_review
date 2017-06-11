//TODO: fill this page in!
var express = require ('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
var port = 8080;
var db = require('../db/config');
var router = require('./router/bb_router.js');

app.use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(morgan('dev')) 
  .use('/api', router)
// depending on which front end framework you're using, 
// serve your static files

// add middleware

// define your routes

// set up your server to listen on your port of choice

app.listen(port, function(err) {
  if (err) {
    console.log('error connecting to port: ', port);
  } else {
    console.log('server now listening on port: ', port);
  }
});
