"use strict";

(function() {

    let SeatsController =  function($rootScope, bookingService) {
        let vm = this;

        function init() {
            bookingService.getSeats($rootScope.ticket.screenID).then(function (results) {
                vm.cinemaseats = results;
            }, function (error) {
                vm.error = true;
                vm.errorStatus = error.status;
            })
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

        $rootScope.ticket.seatID = vm.seat;

    };

    angular.module("apolloCinema").controller("SeatsController", ["$rootScope", "bookingService", SeatsController]);
}());