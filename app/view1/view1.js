'use strict';

// specifying ngRoute is a dependency here
angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.persons = [];
  $scope.addPerson = function(name, number) {
      $scope.persons.push({name: name, number: number});
  };
}]);
