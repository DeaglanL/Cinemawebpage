"use strict";
(function () {

    angular.module('apolloCinema').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "app/feature/home/home.html"

        }).state("about", {
            url: "/about",
            templateUrl: "app/feature/about/about.html"

        }).state("booking", {
            url:"/gettickets",
            templateUrl:"app/feature/booking/booking.html"

        }).state("contact", {
            url: "/contact",
            templateUrl: "app/feature/contact/contact.html"

        }).state("movielist", {
            url: "/movielist",
            templateUrl: "app/feature/movielist/movieListing.html"

        }).state("login", {
            url: "/login",
            templateUrl: "app/feature/login/login.html"

        }).state("register", {
            url: "/register",
            templateUrl: "app/feature/register/register.html"

        }).state("payment", {
            url:"/confirm",
            templateUrl:"app/feature/payment/payment.html"

        }).state("placetovisit", {
            url: "/placetovisit",
            templateUrl: "app/feature/placetovisit/placetovisit.html"

        }).state("search", {
            url: "/search",
            templateUrl: "app/feature/search/search.html"

        }).state("pricing", {
            url: "/pricing",
            templateUrl: "app/feature/pricing/pricing.html"

        }).state("parkinglocation", {
            url: "/parkinglocation",
            templateUrl: "app/feature/parkinglocation/parkinglocation.html"

        }).state("movieinfo", {
            url: "/movieinfo",
            templateUrl: "app/feature/movieinfo/movieinfo.html"

        }).state("seats", {
            url:"/seats",
            templateUrl:"app/feature/seats/seats.html"

        }).state("404", {
            url: "/404",
            templateUrl: "app/feature/404/404.html"

        });

    });
}());