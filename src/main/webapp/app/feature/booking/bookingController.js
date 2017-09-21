"use strict";

(function() {

    let BookingController =  function() {
        let vm = this;

        vm.movieTitle = "Movie Title";
        vm.moviePosterThumbnail = "";
        vm.movieLength = "##mins";
        vm.cinema = "Cinema";
        vm.screenName = "Screen ##";
        vm.screeningDate = "##/##/####";
        vm.screeningTime = "##:##";

        vm.numAdults = 0;
        vm.numConcessions = 0;
        vm.ticketPriceAdult = "10.00";
        vm.ticketPriceConcession = "7.50";

        vm.submitTicketDetails = function () {
            let ticket = {"adults":vm.numAdults,
                        "concessions":vm.numConcessions,
                        "screeningID":"",
                        "seatID":""};
        }
    };

    angular.module("apolloCinema").controller("BookingController", [BookingController]);
}());