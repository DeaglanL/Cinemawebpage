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

        }).state("placetovisit", {
            url: "/placetovisit",
            templateUrl: "app/feature/placetovisit/placetovisit.html"

        }).state("search", {
            url: "/search",
            templateUrl: "app/feature/search/search.html"

        }).state("parkinglocation", {
            url: "/parkinglocation",
            templateUrl: "app/feature/parkinglocation/parkinglocation.html"

        })


    });
}());