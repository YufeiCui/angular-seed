'use strict';

angular.module('myApp.view2', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$filter', function($scope, $filter) {
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.persons = [];
    $scope.alerts = [];
    $scope.addPerson = function(name, number, address) {
        $scope.persons.push({name: name, number: number, address: address});
    };
    $scope.numberOfPages = function() {
        return Math.ceil($scope.persons.length/$scope.pageSize);
    };
}])

.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
})


.directive('contactCard', [function() {
    return{
        restrict: 'E',
        scope: {
            // this is the equivalent compared to name: '=name' for binding the name variable to the name attribute
            name: '=',
            address: '=',
            number: '='
        },
        templateUrl: '/view2/contact-card.html',
        controller: function($scope) {

        }
    };


}])

