"use strict";
(function () {

    angular.module('apolloCinema').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "src/main/webapp/app/feature/home/home.html"

        }).state("about", {
            url:"/about",
            templateUrl:"src/main/webapp/app/feature/about/about.html"

        }).state("contact", {
            url:"/contact",
            templateUrl:"src/main/webapp/app/feature/contact/contact.html"

        }).state("movielist", {
            url:"/movielist",
            templateUrl:"src/main/webapp/app/feature/movielist/movieListing.html"

        }).state("login", {
            url:"/login",
            templateUrl:"src/main/webapp/app/feature/login/login.html"

        }).state("register", {
            url:"/register",
            templateUrl:"src/main/webapp/app/feature/register/register.html"

        }).state("placetovisit", {
            url: "/placetovisit",
            templateUrl: "src/main/webapp/app/feature/placetovisit/placetovisit.html"

        }).state("search", {
            url: "/search",
            templateUrl: "src/main/webapp/app/feature/search/search.html"

        }).state("pricing", {
            url:"/pricing",
            templateUrl:"src/main/webapp/app/feature/pricing/pricing.html"
        }).state("parkinglocation", {
            url: "/parkinglocation",
            templateUrl: "src/main/webapp/app/feature/parkinglocation/parkinglocation.html"

        }).state("movieinfo", {
            url:"/movieinfo",
            templateUrl:"src/main/webapp/app/feature/movieinfo/movieinfo.html"

        }).state("404", {
            url:"/404",
            templateUrl:"src/main/webapp/app/feature/404/404.html"

        })

    });
}());