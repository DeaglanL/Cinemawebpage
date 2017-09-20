"use strict";
(function() {

    const RegisterController =  function() {
        const vm = this;

        vm.takenUsername = false;
        vm.takenEmail = false;

        vm.invalidUsername = false;
        vm.invalidEmail = false;
        vm.invalidPasswordFormat = false;
        vm.passwordNotConfirmed = false;

        vm.error = false;

        vm.validUsername = function (newUser) {
            let regexUsername = /^(?=.{5,})(?=.*[a-z]).*$/; //at least 5 characters including at least one lowercase letter
            if (regexUsername.test(newUser.name)) {
                vm.invalidUsername = false;
                /*check if username is taken
                  if (!checkPositive) {
                    vm.takenUsername = true;
                    return false;
                  } else {
                    return true;
                  }*/
            } else {
                vm.invalidUsername = true;
                return false;
            }
        };

        vm.validEmail = function (newUser) {
            let regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            if (regexEmail.test(newUser.email)) {
                vm.invalidEmail = false;
                /*check if email is used
                  if (!checkPositive) {
                      vm.takenEmail = true;
                      return false;
                  } else {
                      return true;
                  }*/
            } else {
                vm.invalidEmail = true;
                return false;
            }
        };

        vm.validPasswordFormat = function (newUser) {
            let regexPassword = /^(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/; //Must contain at least one number, one uppercase letter,
            if (regexPassword.test(newUser.password)) {                            //one lowercase letter, one special character, and at least 8 or more characters
                vm.invalidPasswordFormat = false;
                return true;
            } else {
                vm.invalidPasswordFormat = true;
                return false;
            }
        };

        vm.validConfirmPassword = function (newUser) {
            if (newUser.password === newUser.confirmPassword && newUser.password.length > 0) {
                vm.passwordNotConfirmed = false;
                return true;
            } else {
                vm.passwordNotConfirmed = true;
                return false;
            }
        };

        function checkIfRobot(newUser) {
            return !(newUser.honeypot==="");
        }

        function confirmNewUser() {
            //await confirmation from server
            if (created) {
                //new user created!
                return true;
            } else {
                vm.error = true;
                vm.errorStatus = response.status;
                return false;
            }
        }

        vm.registerNew = function (newUser) {
            if (checkIfRobot(newUser)) {
                return false;
            }
            if (!vm.validUsername(newUser)) {
                return false;
            }
            if (!vm.validEmail(newUser)) {
                return false;
            }
            if (!vm.validPasswordFormat(newUser)) {
                return false;
            }
            if (!vm.validConfirmPassword(newUser)) {
                return false;
            } else {
                $http({
                    method: "POST",
                    url: "createUserPATH",
                    data: newUser
                }).then(function() {
                        confirmNewUser();
                    },
                    function(response) {
                        vm.error = true;
                        vm.errorStatus = response.status;
                        return false;
                    });
                return true;
            }
        };
    };

    angular.module('apolloCinema').controller('RegisterController', [RegisterController]);
}());