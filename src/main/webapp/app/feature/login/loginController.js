"use strict";
(function() {

    const LoginController =  function() {
        const vm = this;

        vm.wrongDetails = false;
        vm.error = false;

        function acceptableUsername(username) {
            let regexUsername = /^(?=.{5,})(?=.*[a-z]).*$/; //at least 5 characters including at least one lowercase letter
            return regexUsername.test(username);
        }

        function acceptablePassword(password) {
            let regexPassword = /^(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/; //Must contain at least one number, one uppercase letter,
            return regexPassword.test(password);                       //one lowercase letter, one special character, and at least 8 or more characters
        }

        function checkIfRobot(honeypot) {
            return !(honeypot==="");
        }

        function resetPassword(user) {
            user.password = "";
        }

        function confirmLogin(user) {
            //await login details confirmation from server
            if (confirmed) {
                //logged in!
                return true;
            } else {
                vm.wrongDetails = !vm.wrongDetails;
                resetPassword(user);
                return false;
            }
        }

        vm.loginSubmit = function(user) {
            if (checkIfRobot(user.honeypot)) {
                return false;
            }
            if (!acceptableUsername(user.name) || !acceptablePassword(user.password)) {
                vm.wrongDetails = !vm.wrongDetails;
                resetPassword(user);
                return false;
            } else {
                $http({
                    method: "POST",
                    url: "checkUserPATH",
                    data: user
                }).then(function () {
                        confirmLogin(user);
                    },
                    function (response) {
                        vm.error = true;
                        vm.errorStatus = response.status;
                        resetPassword(user);
                        return false;
                    });
                return true;
            }
        };
    };

    angular.module("apolloCinema").controller("LoginController", [LoginController]);
}());