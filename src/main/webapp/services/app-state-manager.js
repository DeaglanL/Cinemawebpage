"use strict";
(function () {

    angular.module('apolloCinema').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "app/feature/home/home.html"

        }).state("about", {
            url:"/about",
            templateUrl:"app/feature/about/about.html"

        }).state("contact", {
            url:"/contact",
            templateUrl:"app/feature/contact/contact.html"

        }).state("movielist", {
            url:"/movielist",
            templateUrl:"app/feature/movielist/movieListing.html"

        }).state("login", {
            url:"/login",
            templateUrl:"app/feature/login/login.html"

        }).state("register", {
            url:"/register",
            templateUrl:"app/feature/register/register.html"

        }).state("movieinfo", {
            url:"/movieinfo",
            templateUrl:"app/feature/movieinfo/movieinfo.html"

        })
    });
}());