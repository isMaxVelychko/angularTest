(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('userCtrl', ['$scope', 'user', userCtrl]);

    function userCtrl($scope, user) {
        $scope.user = user;
    }
})();
