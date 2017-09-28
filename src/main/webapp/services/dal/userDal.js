"use strict";

(function () {

    angular.module("apolloCinema").service("userDal", ["dal", UserDal]);

    function UserDal (dal) {

        this.getUser = function () {
            return dal.http.GET("customer/json");
        };

        this.verify = function (userToCheck) {
            console.log("Initiating POST DAL");
            return dal.http.POST("customer/json", userToCheck);
        };

        this.add = function (userToAdd) {
            console.log("Initiating PUT DAL");
            return dal.http.PUT("customer/json", userToAdd);
        };

        this.deleteUser = function (userToDelete) {
            return dal.http.DELETE("customer/json/", userToDelete);
        };
    }
}());
