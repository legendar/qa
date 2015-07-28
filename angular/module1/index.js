'use strict';

var angular = require('angular'),
    config = require('./module1.config');

module.exports = 'myApp.module1';

angular
  .module('myApp.module1', [])
  .config(config)
