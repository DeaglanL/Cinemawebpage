"use strict";

(function () {

    angular.module("apolloCinema").service("userDal", ["dal", UserDal]);

    function UserDal (dal) {

        this.getUser = function () {
            return dal.http.GET("customer/json");
        };

        this.verify = function (userToCheck) {
            return dal.http.POST("customer/json", userToCheck);
        };

        this.add = function (userToAdd) {
            return dal.http.POST("customer/json/reg", userToAdd);
        };

        this.deleteUser = function (userToDelete) {
            return dal.http.DELETE("customer/json/", userToDelete);
        };
    }
}());
