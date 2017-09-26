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
                delete user.honeypot;
                console.log("credentials object ready");
                userService.verify(user).then(function (results) {
                    if (results.message!=="success") {
                        vm.wrongDetails = true;
                        vm.loginStatus = "Login failed: " + results.message;
                        resetPassword(user);
                        return false;
                    } else {
                        //logged in!
                        vm.wrongDetails = false;
                        vm.loginStatus = "Login success!";
                        return true;
                    }
                }, function (error) {
                    console.log("ERROR: " + error);
                    vm.error = true;
                    vm.errorStatus = error.status;
                    resetPassword(user);
                    return false;
                });
            }
        };
    };

    angular.module("apolloCinema").controller("LoginController", ["userService", LoginController]);
}());