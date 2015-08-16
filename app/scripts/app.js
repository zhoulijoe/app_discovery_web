'use strict';

import { AboutController } from './controllers/about';
import { TasksController } from './controllers/tasks';

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
    .controller('AboutCtrl', AboutController)
    .controller('TasksCtrl', TasksController)
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
