"use strict";

(function() {

    let UserService =  function(userDal) {

        this.getUser = function()
        {
            return userDal.getUser();
        };

        this.verify = function(user)
        {
            return userDal.verify(user);
        };

        this.add = function(user)
        {
            return userDal.add(user);
        };

        this.deleteUser = function(user)
        {
            return userDal.deleteUser(user);
        };
    };

    angular.module("apolloCinema").service("userService", ["userDal", UserService]);
}());