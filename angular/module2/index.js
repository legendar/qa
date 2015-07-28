'use strict';

var angular = require('angular');

module.exports = 'myApp.module2'

angular
  .module('myApp.module2', [])

// should be after myApp.module2 initialize
require('./module2.config');
require('./module2.controller');
