"use strict";
(function() {

    let LoginController =  function(userService) {
        let vm = this;

        function checkIfRobot(honeypot) {
            return !(honeypot===undefined);
        }

        function resetPassword(user) {
            user.password = "";
        }

        vm.loginSubmit = function(user) {
            if (checkIfRobot(user.honeypot)) {
                return false;
            } else {
                vm.wrongDetails = false;
                delete user.honeypot;
                userService.saveUser(user).then(function (results) {
                    if (results.message!=="success") {
                        vm.wrongDetails = true;
                        vm.loginStatus = "Login failed: wrong details";
                        resetPassword(user);
                        return false;
                    } else {
                        //logged in!
                        vm.loginStatus = "Login success!";
                        return true;
                    }
                }, function (error) {
                    vm.error = true;
                    vm.errorStatus = error.status + error;
                    vm.loginStatus = "Login failed: error";
                    resetPassword(user);
                    return false;
                });
            }
        };
    };

    angular.module("apolloCinema").controller("LoginController", ["userService", LoginController]);
}());