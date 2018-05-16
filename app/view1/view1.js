'use strict';

// specifying ngRoute is a dependency here
angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    css: 'view1/view1.css'
  });
}])

.controller('View1Ctrl', ['$scope', '$filter', function($scope, $filter) {
  $scope.currentPage = 0;
  $scope.pageSize = 5;
  $scope.persons = [];
  $scope.addPerson = function(name, number) {
      $scope.persons.push({name: name, number: number});
  };
  $scope.numberOfPages = function() {
      return Math.ceil($scope.persons.length/$scope.pageSize);
  }
}])

.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
