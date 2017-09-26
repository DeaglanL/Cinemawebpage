"use strict";

(function() {

    let UserService =  function(userDal) {

        this.getUser = function()
        {
            return userDal.getUser();
        };

        this.verify = function(user)
        {
            console.log("verify user method called");
            return userDal.verify(user);
        };

        this.add = function(user)
        {
            console.log("add user method called");
            return userDal.add(user);
        };

        this.deleteUser = function(user)
        {
            return userDal.deleteUser(user);
        };
    };

    angular.module("apolloCinema").service("userService", ["userDal", UserService]);
}());