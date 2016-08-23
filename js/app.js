(function() {
    'use strict';

    angular
      .module('myApp', ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('users', {
            url: '/users/',
            templateUrl: 'templates/listUsersTemplate.html',
            controller: 'listUsersCtrl',
            resolve: {
                users: function(userService) {
                  return userService.loadUsers();
                },
            }
          })
          .state('detail', {
            url: '/users/:userId',
            templateUrl: 'templates/userTemplate.html',
            controller: 'userCtrl',
            resolve: {
                user: function(userService, $stateParams) {
                    return userService.loadUsers($stateParams.userId);
                }
            }
          });

          $urlRouterProvider.otherwise("/users/");
    });
})();
