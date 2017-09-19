(function() {

    const LoginController =  function() {
        const vm = this;

        vm.wrongDetails = false;

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

        vm.loginSubmit = function(user) {
            if (checkIfRobot(user.honeypot)) {
                return false;
            }
            if (!acceptableUsername(user.name) || !acceptablePassword(user.password)) {
                vm.wrongDetails = !vm.wrongDetails;
                resetPassword(user);
                return false;
            } else {
                //TODO: test functions
                /*var validateUser = "";        //Not yet linked to server, does nothing atm
                $http({
                    method: "POST",
                    url: validateUser,
                    data: user
                }).then(function (response) {
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
                    function (response) { // optional
                        alert("ERROR 500: Unable to verify login");
                        return false;
                    });*/
                return true;
            }
        };
    };

    angular.module("apolloCinema").controller("LoginController", [LoginController]);
}());