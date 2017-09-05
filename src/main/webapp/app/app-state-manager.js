"use strict";

(function () {

    angular.module('apolloCinema').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "app/feature/home/home.html"
        })
    });
}());