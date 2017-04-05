angular.module('yourAppName').controller('HomeController', function($scope, $http) {
    $scope.helloWorld = "Hello World!"
    console.log($scope.helloWorld)
});