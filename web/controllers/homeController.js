angular.module('yourAppName').controller('HomeController', function($scope) {
    $scope.helloWorld = "Hello World!"
    console.log($scope.helloWorld)
});