"use strict";

(function() {

    let BookingController =  function() {
        let vm = this;

        vm.movieTitle = "Movie Title";
        vm.moviePosterThumbnail = "poster path";
        vm.movieLength = "Movie duration";
        vm.cinema = "Cinema";
        vm.screenName = "Screen ##";
        vm.screeningDate = "Date of screening";
        vm.screeningTime = "Time of screening";

        vm.numAdults = 0;
        vm.numConcessions = 0;
        vm.ticketPriceAdult = 10;
        vm.ticketPriceConcession = 7.50;

        vm.submitTicketDetails = function () {

        }
    };

    angular.module("apolloCinema").controller("BookingController", [BookingController]);
}());