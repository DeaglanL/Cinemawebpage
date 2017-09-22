"use strict";
(function() {

    let RegisterController =  function(userService) {
        let vm = this;

        vm.submitDisabled = true;

        vm.validUsername = function (newUser) {
            let regexUsername = /^(?=.{5,})(?=.*[a-z]).*$/; //at least 5 characters including at least one lowercase letter
            if (regexUsername.test(newUser.username)) {
                vm.invalidUsername = false;
                /*userService.checkUsername(newUser).then(function (results) {
                    if (results!=="success") {
                        vm.takenUsername = true;
                        vm.registerStatus = "Username already taken";
                    } else {
                        vm.registerStatus = "Username available!";
                    }
                }, function (error) {
                    vm.error = true;
                    vm.errorStatus = error.status;
                    vm.registerStatus = "Username check failed: error";
                });*/
            } else {
                vm.invalidUsername = true;
            }
            checkAllValid();
        };

        vm.validEmail = function (newUser) {
            let regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            if (regexEmail.test(newUser.email)) {
                vm.invalidEmail = false;
                /*userService.checkEmail(newUser).then(function (results) {
                    if (results!=="success") {
                        vm.takenEmail = true;
                        vm.registerStatus = "Email already taken";
                    } else {
                        vm.registerStatus = "Email available!";
                    }
                }, function (error) {
                    vm.error = true;
                    vm.errorStatus = error.status;
                    vm.registerStatus = "Email check failed: error";
                });*/
            } else {
                vm.invalidEmail = true;
            }
            checkAllValid();
        };

        vm.validPasswordFormat = function (newUser) {
            vm.invalidPasswordFormat = !((/^(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/).test(newUser.password));
            //Must contain at least one number, one uppercase letter, one lowercase letter, one special character, and at least 8 or more characters
            checkAllValid();
        };

        vm.validConfirmPassword = function (newUser) {
            vm.passwordNotConfirmed = !(newUser.password === newUser.confirmPassword && newUser.password.length > 0);
            checkAllValid();
        };

        function checkAllValid() {
            vm.submitDisabled = vm.invalidUsername||vm.invalidEmail||vm.invalidPasswordFormat||vm.passwordNotConfirmed;
        }

        function checkIfRobot(newUser) {
            return !(newUser.honeypot===undefined);
        }

        vm.registerNew = function (newUser) {
            if (checkIfRobot(newUser)) {
                return false;
            } else {
                delete newUser.honeypot;
                delete newUser.confirmPassword;
                newUser.name = "";
                newUser.address = "";
                newUser.dob = "";
                newUser.phone = "";
                userService.updateUser(newUser).then(function (results) {
                    if (results.message!=="success") {
                        vm.registerStatus = "User creation failed: " + results.message;
                        return false;
                    } else {
                        vm.registerStatus = "New user created!";
                        return true;
                    }
                }, function (error) {
                    vm.error = true;
                    vm.errorStatus = error;
                    vm.registerStatus = "User creation failed: error";
                    return false;
                });
            }
        };
    };

    angular.module("apolloCinema").controller("RegisterController", ["userService", RegisterController]);
}());