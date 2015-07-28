'use strict';

var angular = require('angular');

angular
  .module('myApp.module2')
  .controller('Module2Controller', Module2Controller)

function Module2Controller($scope) {
  $scope.greeting = 'module 2 loaded'
}
