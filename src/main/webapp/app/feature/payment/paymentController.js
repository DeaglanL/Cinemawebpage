"use strict";

(function() {

    let PaymentController =  function() {
        let vm = this;

        vm.movieTitle = "Movie Title";
        vm.movieLength = "Movie duration";
        vm.cinema = "Cinema";
        vm.screenName = "Screen ##";
        vm.screeningDate = "Date of screening";
        vm.screeningTime = "Time of screening";

        vm.ticketType = "";
        vm.seat = "";
        vm.ticketPrice = "";

        vm.sendToPaypal = function() {

        };

    };

    angular.module("apolloCinema").controller("PaymentController", [PaymentController]);
}());