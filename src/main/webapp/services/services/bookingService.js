"use strict";

(function() {

    let BookingService = function(bookingDal) {

        this.getScreenings = function(movieID) {
            return bookingDal.getScreenings(movieID);
        };

    };

    angular.module("apolloCinema").service("bookingService", ["bookingDal", BookingService]);
}());