"use strict";
(function() {

    let RegisterController =  function($http) {
        let vm = this;

        vm.submitDisabled = true;

        vm.validUsername = function (newUser) {
            let regexUsername = /^(?=.{5,})(?=.*[a-z]).*$/; //at least 5 characters including at least one lowercase letter
            if (regexUsername.test(newUser.name)) {
                vm.invalidUsername = false;
                $http({
                    method: "POST",
                    url: "rest/customer/json",
                    data: newUser.name
                }).then(function() {
                    $http({
                        method: "GET",
                        url: "rest/customer/json",
                    }).then(function(){
                        if (response.data!=="success"){
                            //username is not unique
                            vm.takenUsername = true;
                        }
                    },function(response) {
                        vm.error = true;
                        vm.errorStatus = response.status;
                        return false;
                    });
                },function(response) {
                    vm.error = true;
                    vm.errorStatus = response.status;
                    return false;
                });
            } else {
                vm.invalidUsername = true;
            }
            checkAllValid();
        };

        vm.validEmail = function (newUser) {
            let regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            if (regexEmail.test(newUser.email)) {
                vm.invalidEmail = false;
                $http({
                    method: "POST",
                    url: "rest/customer/json",
                    data: newUser.email
                }).then(function() {
                    $http({
                        method: "GET",
                        url: "rest/customer/json",
                    }).then(function(response){
                        if (response.data!=="success"){
                            //email is not unique
                            vm.takenEmail = true;
                        }
                    },function(response) {
                        vm.error = true;
                        vm.errorStatus = response.status;
                        return false;
                    });
                },function(response) {
                    vm.error = true;
                    vm.errorStatus = response.status;
                    return false;
                });
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
            return !(newUser.honeypot==="");
        }

        vm.registerNew = function (newUser) {
            if (checkIfRobot(newUser)) {
                return false;
            } else {
                newUser.address = "";
                newUser.dob = "";
                newUser.phone = "";
                $http({
                    method: "POST",
                    url: "rest/customer/json",
                    data: newUser
                }).then(function() {
                        $http({
                            method: "GET",
                            url: "rest/customer/json",
                        }).then(function(){
                            //new user created!
                            return true;
                        },function(response) {
                            vm.error = true;
                            vm.errorStatus = response.status;
                            return false;
                        });
                    },
                    function(response) {
                        vm.error = true;
                        vm.errorStatus = response.status;
                        return false;
                    });
            }
        };
    };

    angular.module('apolloCinema').controller('RegisterController', ["$http", RegisterController]);
}());