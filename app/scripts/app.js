'use strict';

/**
 * @ngdoc overview
 * @name appDiscoveryWebApp
 * @description
 * # appDiscoveryWebApp
 *
 * Main module of the application.
 */
angular
  .module('appDiscoveryWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl',
        controllerAs: 'tasks'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
