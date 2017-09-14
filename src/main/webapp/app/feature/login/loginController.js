(function() {

    var LoginController =  function($http) {
        var vm = this;

        vm.wrongDetails = false;

        function acceptableUsername(username) {
            var regexUsername = "/(?=.*[a-z]).{4,}/i"; //at least 4 characters including one lowercase letter
            return regexUsername.test(username);
        }

        function acceptablePassword(password) {
            var regexPassword = "/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i"; //Must contain at least one number, one uppercase letter,
            return regexPassword.test(password);                       //one lowercase letter, and at least 8 or more characters
        }

        function validateHuman(honeypot) {
            return !!honeypot;
        }

        function resetPassword(user) {
            user.password = "";
        }

        vm.loginSubmit = function(user) {
            if (validateHuman(user.honeypot)) {  //if form is filled, form will not be submitted
                alert("Robot detected");
                return false;
            }
            if (!acceptableUsername(user.name) || !acceptablePassword(user.password)) {
                vm.wrongDetails = !vm.wrongDetails;
                resetPassword(user);
                return false;
            } else {
                var validateUser = "";
                $http({
                    method: "POST",
                    url: validateUser,
                    data: user
                }).then(function(response) {
                        //await login details confirmation from server
                        if (validLogin) {
                            //route to homepage
                            return true;
                        } else {
                            vm.wrongDetails = !vm.wrongDetails;
                            resetPassword(user);
                            return false;
                        }
                    },
                    function(response) { // optional
                        alert("ERROR 500: Unable to verify login");
                        return false;
                    });
            }
        };
    };

    angular.module("apolloCinema").controller("LoginController", ["$http", LoginController]);
}());