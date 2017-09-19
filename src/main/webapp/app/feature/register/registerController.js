"use strict";
(function() {

    let RegisterController =  function() {
        let vm = this;

        vm.takenUsername = false;
        vm.takenEmail = false;

        vm.invalidUsername = false;
        vm.invalidEmail = false;
        vm.invalidPasswordFormat = false;
        vm.passwordNotConfirmed = false;

        vm.validUsername = function (username) {
            let regexUsername = "/(?=.*[a-z]).{4,}/i"; //at least 4 characters including at least one lowercase letter
            if (regexUsername.test(username)) {
                //check if username is taken
                //if (!checkPositive) {
                //  vm.takenUsername = !vm.takenUsername;
                //  return false;
                //} else {
                //  return true;
                //}
            } else {
                vm.invalidUsername = !vm.invalidUsername;
                return false;
            }
        };

        vm.validEmail = function (email) {
            let regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if (regexEmail.test(email)) {
                //check if email is used
                //if (!checkPositive) {
                //  vm.takenEmail = !vm.takenEmail;
                //  return false;
                //} else {
                //  return true;
                //}
            } else {
                vm.invalidEmail = !vm.invalidEmail;
                return false;
            }
        };

        vm.validatePasswordFormat = function (newUser) {
            let regexPassword = "/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i";
            if (!regexPassword.test(newUser.password)) {
                vm.invalidPasswordFormat = !vm.invalidPasswordFormat;
                return false;
            } else {
                return true;
            }
        };

        vm.validateConfirmPassword = function (newUser) {
            if (newUser.password === newUser.confirmPassword && newUser.password.length > 0) {
                return true;
            } else {
                vm.passwordNotConfirmed = !vm.passwordNotConfirmed;
                return false;
            }
        };

        function validateHuman(honeypot) {
            return !!honeypot;
        }

        vm.registerNew = function (newUser) {
            if (validateHuman(newUser.honeypot)) {  //if form is filled, form will not be submitted
                alert("Robot detected");
                return false;
            }
            if (!vm.validUsername) {
                alert("Username not valid!");
                return false;
            }
            if (!vm.validEmail) {
                alert("Email not valid!");
                return false;
            }
            if (!vm.validatePasswordFormat) {
                alert("Password not valid!");
                return false;
            }
            if (!vm.validateConfirmPassword) {
                alert("Password not confirmed!");
                return false;
            } else {
                //TODO: test functions
                /*var addNewUser = "";          //Not yet linked to server, does nothing atm
                $http({
                    method: "POST",
                    url: addNewUser,
                    data: user
                }).then(function(response) {
                        //await confirmation from server
                        if (newUserCreated) {
                            //route to homepage
                            return true;
                        } else {
                            return false;
                        }
                    },
                    function(response) { // optional
                        alert("ERROR 500: Unable to create user");
                        return false;
                    });*/
            }
        };
    };

    angular.module('apolloCinema').controller('RegisterController', [RegisterController]);
}());