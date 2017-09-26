"use strict";

(function() {

    let BookingController =  function($rootScope, bookingService) {
        let vm = this;

        function init() {
            bookingService.getScreenings(vm.movie.id).then(function (results) {
                vm.screenings = results;
            }, function (error) {
                vm.error = true;
                vm.errorStatus = error.status;
            });
        }

        vm.movie = $rootScope.sharedMovie;

        vm.screenings = [{"screeningID":41,"cinema":"London","screenID":1,"time":"14:55","movieID":3,"date":"02/10/17"},
                        {"screeningID":42,"cinema":"London","screenID":4,"time":"16:20","movieID":3,"date":"02/10/17"},
                        {"screeningID":43,"cinema":"Manchester","screenID":2,"time":"17:10","movieID":3,"date":"02/10/17"},
                        {"screeningID":44,"cinema":"Sheffield","screenID":1,"time":"19:50","movieID":3,"date":"02/10/17"},
                        {"screeningID":45,"cinema":"Manchester","screenID":5,"time":"19:50","movieID":3,"date":"02/10/17"},
                        {"screeningID":46,"cinema":"London","screenID":4,"time":"20:25","movieID":3,"date":"02/10/17"},
                        {"screeningID":47,"cinema":"Sheffield","screenID":3,"time":"21:30","movieID":3, "date":"02/10/17"},
                        {"screeningID":48,"cinema":"Manchester","screenID":2,"time":"23:00","movieID":3,"date":"02/10/17"}];

        vm.ticketPriceAdult = 10;
        vm.ticketPriceConcession = 7.5;

        vm.choose = function(screening) {
            vm.screen = screening.screenID;
            vm.screeningDate = screening.date;
            vm.screeningTime = screening.time;
        };

        vm.submitTicketDetails = function () {
            let ticket = {"adults":vm.numAdults,
                        "concessions":vm.numConcessions,
                        "screeningID":vm.screen,
                        "seatID":""};
        };

        //init();
    };

    angular.module("apolloCinema").controller("BookingController", ["$rootScope", "bookingService", BookingController]);
}());