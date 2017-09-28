"use strict";

(function () {

    angular.module("apolloCinema").service("bookingDal", ["dal", BookingDal]);

    function BookingDal (dal) {

        this.getqq = function () {
            return dal.http.GET("rest/qq/json");
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
