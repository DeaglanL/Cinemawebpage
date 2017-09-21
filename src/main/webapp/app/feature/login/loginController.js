"use strict";
(function() {

    let LoginController =  function(userService) {
        let vm = this;

        function acceptableUsername(username) {
            let regexUsername = /^(?=.{5,})(?=.*[a-z]).*$/; //at least 5 characters including at least one lowercase letter
            return regexUsername.test(username);
        }

        function acceptablePassword(password) {
            let regexPassword = /^(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/; //Must contain at least one number, one uppercase letter,
            return regexPassword.test(password);                       //one lowercase letter, one special character, and at least 8 or more characters
        }

        function checkIfRobot(honeypot) {
            return !(honeypot===undefined);
        }

        function resetPassword(user) {
            user.password = "";
        }

        vm.loginSubmit = function(user) {
            if (checkIfRobot(user.honeypot)) {
                return false;
            }
            if (!acceptableUsername(user.username) || !acceptablePassword(user.password)) {
                vm.wrongDetails = true;
                vm.loginStatus = "Login failed";
                resetPassword(user);
                return false;
            } else {
                vm.wrongDetails = false;
                delete user.honeypot;
                userService.saveUser(user).then(function (results) {
                    if (results!=="success") {
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
                    vm.errorStatus = error.status;
                    vm.loginStatus = "Login failed: error";
                    resetPassword(user);
                    return false;
                });
            }
        };
    };

    angular.module("apolloCinema").controller("LoginController", ["userService", LoginController]);
}());