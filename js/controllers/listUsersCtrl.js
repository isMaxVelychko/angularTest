(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('listUsersCtrl', ['$scope', 'users', 'userService', listUsersCtrl]);

    function listUsersCtrl($scope, users, userService) {
        $scope.users = users;
        $scope.deleteUser = deleteUser;


        function deleteUser(user) {
            userService.deleteUser(user.id)
                .then(function() {
                    $scope.users.forEach(function(item,index,arr) {
                        if(item.id == user.id) {
                            arr.splice(index, 1);
                        }
                    });
                });
        };
    }
})();
