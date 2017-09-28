"use strict";

(function () {

    let BookingController = function ($rootScope, bookingService) {
        let vm = this;

        function init() {
            try{
                vm.movie = {"id":$rootScope.sharedMovie.results[0].id,"title":$rootScope.sharedMovie.results[0].title,"poster":"https://image.tmdb.org/t/p/w500" + $rootScope.sharedMovie.results[0].poster_path,length:$rootScope.sharedMovie2.runtime};
            } catch(err){
                vm.error = true;
                vm.errorStatus = "TypeError";
            }
        }

        init();

        vm.overlay = {
            "color" : "white",
            "font-size" : "24px",
            "padding" : "100px",
            "position" : "fixed",
            "width": "100%", /* Full width (cover the whole page) */
            "height": "100%", /* Full height (cover the whole page) */
            "top": "0",
            "left": "0",
            "right": "0",
            "bottom": "0",
            "background-color" : "rgba(0,0,0,0.75)" /* Black background with opacity */
        };

        vm.ticketPriceAdult = 10;
        vm.ticketPriceConcession = 7.5;

        vm.listScreenings = function() {
            bookingService.getScreenings(vm.movie.id).then(function (results) {
                vm.screenings = results;
            }, function (error) {
                vm.error = true;
                vm.errorStatus = error.status;
            })
        };

        vm.choose = function(screening) {
            vm.screen = screening.screenID;
            vm.screeningDate = screening.date;
            vm.screeningTime = screening.time;
        };

        $rootScope.ticket = {"adults": vm.numAdults, "concessions": vm.numConcessions, "cinema":vm.cinema, "screeningID": vm.screeningID, "screenID": vm.screen, "seatID": ""};
    };

    angular.module("apolloCinema").controller("BookingController", ["$rootScope", "bookingService", BookingController]);
}());