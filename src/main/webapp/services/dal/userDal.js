"use strict";

(function () {

    angular.module("apolloCinema").service("userDal", ["dal", UserDal]);

    function UserDal (dal) {

        this.getUser = function () {
            return dal.http.GET("/rest/customer/json");
        };

        this.saveUser = function (userToSave) {
            return dal.http.POST("/rest/customer/json", userToSave);
        };

        this.updateUser = function (userToUpdate) {
            return dal.http.PUT("/rest/customer/json/", userToUpdate);
        };

        this.deleteUser = function (userToDelete) {
            return dal.http.DELETE("/rest/customer/json/", userToDelete);
        };
    }
}());
