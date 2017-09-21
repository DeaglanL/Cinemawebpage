"use strict";

(function() {

    let UserService =  function(userDal) {

        this.getUser = function()
        {
            return userDal.getUser();
        };

        this.saveUser = function(user)
        {
            return userDal.saveUser(user);
        };

        this.updateUser = function(user)
        {
            return userDal.updateUser(user);
        };

        this.deleteUser = function(user)
        {
            return userDal.deleteUser(user);
        };
    };

    angular.module("apolloCinema").service("userService", ["userDal", UserService]);
}());