angular.module('yourAppName').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/views/home.html'
            // controller: 'OverviewController',
            // authenticate: true
        })
        // .state("login", {
        //     url: "/login",
        //     templateUrl: "/views/login.html",
        //     controller: "LoginController",
        //     authenticate: false
        // });
    return $locationProvider.html5Mode(true);
});
