"use strict";

(function () {

    angular.module("apolloCinema").service("bookingDal", ["dal", BookingDal]);

    function BookingDal (dal) {

        this.getSeats = function (screenID) {
            return dal.http.POST("rest/seats/json", screenID);
        };

        this.getScreenings = function (movieID) {
            return dal.http.POST("rest/screenings/json", movieID);
        };

        this.updateqq = function (qqToAdd) {
            return dal.http.PUT("rest/qq/json", qqToAdd);
        };

        this.deleteqq = function (qqToDelete) {
            return dal.http.DELETE("/rest/qq/json/", qqToDelete);
        };
    }
}());
