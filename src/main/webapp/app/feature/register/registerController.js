(function() {

    const RegisterController =  function() {
        const vm = this;

        vm.takenUsername = false;
        vm.takenEmail = false;

        vm.invalidUsername = false;
        vm.invalidEmail = false;
        vm.invalidPasswordFormat = false;
        vm.passwordNotConfirmed = false;

        vm.validUsername = function (username) {
            let regexUsername = /^(?=.{5,})(?=.*[a-z]).*$/; //at least 5 characters including at least one lowercase letter
            if (regexUsername.test(username)) {
                vm.invalidUsername = false;
                //check if username is taken
                //if (!checkPositive) {
                //  vm.takenUsername = !vm.takenUsername;
                //  return false;
                //} else {
                //  return true;
                //}
            } else {
                vm.invalidUsername = true;
                return false;
            }
        };

        vm.validEmail = function (email) {
            let regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            if (regexEmail.test(email)) {
                vm.invalidEmail = false;
                //check if email is used
                //if (!checkPositive) {
                //  vm.takenEmail = true;
                //  return false;
                //} else {
                //  return true;
                //}
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

        function checkIfRobot(honeypot) {
            return !(honeypot==="");
        }

        vm.registerNew = function (newUser) {
            if (checkIfRobot(newUser.honeypot)) {
                return false;
            }
            if (!vm.validUsername) {
                return false;
            }
            if (!vm.validEmail) {
                return false;
            }
            if (!vm.validPasswordFormat) {
                return false;
            }
            if (!vm.validConfirmPassword) {
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
                return true;
            }
        };
    };

    angular.module('apolloCinema').controller('RegisterController', [RegisterController]);
}());