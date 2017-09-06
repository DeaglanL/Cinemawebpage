"use strict";

(function () {

    angular.module('apolloCinema').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "app/features/home/home.html"
        }).state("contact", {
                url: "/contact",
                templateUrl: "app/features/contact/contact.html"
        })
    });
}());