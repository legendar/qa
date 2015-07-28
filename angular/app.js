var angular = require('angular'),
    lodash = require('lodash'),
    uiRouter = require('angular-ui-router'),
    module1 = require('module1'),
    module2 = require('module2');

// Declare app level module which depends on views, and components
angular.module('myApp', [
  uiRouter,
  module1, // or 'myApp.module1'
  module2, // or 'myApp.module2'
]).config(['$urlRouterProvider', function($urlRouterProvider) {
  //$urlRouterProvider.otherwise({redirectTo: '/module1'});
}]);

angular
  .element(document.getElementsByTagName('html')[0])
  .ready(function() {
    // bootstrap the app manually
    angular.bootstrap(document, ['myApp']);
  });
