"use strict";

(function() {

    let BookingService = function(bookingDal) {

        this.getScreenings = function(movieID) {
            return bookingDal.getScreenings(movieID);
        };

        this.getSeats = function(screenID) {
            return bookingDal.getSeats(screenID);
        };

    };

    angular.module("apolloCinema").service("bookingService", ["bookingDal", BookingService]);
}());