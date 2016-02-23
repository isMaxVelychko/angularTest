(function() {
    'use strict';

    angular
        .module('myApp', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
        	$routeProvider.
        		when('/users', {
        			templateUrl: 'templates/list-users-template.html',
        			controller: 'listUsersCtrl'
        		}).
        		when('/users/:userId', {
        			templateUrl: 'templates/user-template.html',
        			controller: 'userCtrl'
        		}).
        		otherwise({
        			redirectTo: '/users'
        		});
        }]);
})();