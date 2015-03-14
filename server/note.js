/**
 * Module dependencies
 */

var bodyParser     = require('body-parser');
var errorHandler   = require('errorhandler');
var express        = require('express');
var http           = require('http');
var methodOverride = require('method-override');
var lodash         = require('lodash');
var morgan         = require('morgan');
var path           = require('path');

/**
 * Application prototype
 */

var app = module.exports = express();

/**
 * Application configuration
 */

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/**
 * Middleware configuration
 */

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '../public')));

/**
 * Environment configuration
 */

var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
  app.use(errorHandler());
}

/**
 * Exports the app
 */

module.exports = app;