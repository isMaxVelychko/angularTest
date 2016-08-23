(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('userService', ['$rootScope', '$http', userService]);

    function userService($rootScope, $http) {
        var root = 'http://jsonplaceholder.typicode.com';

        return {
            loadUsers: loadUsers,
            deleteUser: deleteUser,
        };


        function loadUsers(userId) {
            var generatedUrl;

            if(userId) {
                generatedUrl = root + '/users/' + userId;
            } else {
                generatedUrl = root + '/users/';
            }

            return $http.get(generatedUrl).then(function (response) {
                return response.data;
            });
        }

        function deleteUser(userId) {
          return $http.delete(root + '/users/' + userId);
        }
    }
})();
