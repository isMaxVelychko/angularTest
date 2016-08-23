(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('apiService', ['$rootScope', '$http', apiService]);

    function apiService($rootScope, $http) {
        var root = 'http://jsonplaceholder.typicode.com';

        return {
            loadUsers: loadUsers,
            saveUser: saveUser,
            deleteUser: deleteUser,
        };


        function loadUsers() {
            return $http.get(root + '/users/');
        }

        function saveUser(data) {
          $http.put(root + '/users/' + data.id, data)
            .then(function(data) {
              $rootScope.$broadcast('updateUserData', data.data);
            })
        }

        function deleteUser(userId) {
          return $http.delete(root + '/users/' + userId);
        }
    }
})();
