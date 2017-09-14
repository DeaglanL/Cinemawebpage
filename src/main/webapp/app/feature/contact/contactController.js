"use strict";

(function() {

    var ContactController =  function($http) {
        var vm = this;

        vm.phoneInvalid = false;
        vm.emailInvaild = false;
        vm.thankYou = false;

        vm.overlay = {
            "color" : "white",
            "font-size" : "24px",
            "padding" : "56px",
            "position" : "fixed",
            "width": "100%", /* Full width (cover the whole page) */
            "height": "100%", /* Full height (cover the whole page) */
            "top": "0",
            "left": "0",
            "right": "0",
            "bottom": "0",
            "background-color" : "rgba(0,0,0,0.5)" /* Black background with opacity */
        };

        function toggleOverlay () {
            vm.thankYou = !vm.thankYou;
            if (vm.thankYou) {
                console.log("Overlay turned on");
            } else {
                console.log("Overlay turned off");
            }
        }

        function validEmail(email) { // see:
            var reEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return reEmail.test(email);
        }

        function validPhone(phone) { // see:
            var rePhone = /^07([\d]{3})[(\D\s)]?[\d]{3}[(\D\s)]?[\d]{3}$/i;
            return rePhone.test(phone);
        }

        function validateHuman(honeypot) {
            if (honeypot) {  //if hidden form filled up
                console.log("Robot Detected!");
                return true;
            } else {
                console.log("Welcome Human!");
            }
        }

        function reset(data) {
            data.name = "";
            data.phone = "";
            data.email = "";
            data.message = "";
            data.honeypot = "";
            console.log("Form values successfully reset");
        }

        vm.handleFormSubmit = function (data) {
            console.log("Beginning handleFormSubmit");
            if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
                return false;
            }
            if (!validPhone(data.phone)) {
                vm.phoneInvalid = !vm.phoneInvalid;
                console.log("Phone number invalid");
                return false;
            }
            if (!validEmail(data.email)) {   // if email is not valid show error
                vm.emailInvaild = !vm.emailInvaild;
                console.log("Email address invalid");
                return false;
            } else {
                var googleScript = "https://script.google.com/macros/s/AKfycbzCVcDrHI_yn2LPjr45k7r-E5Sw6PKTVph8jmNJTz2FtHAGkNne/exec";
                var encoded = Object.keys(data).map(function (k) {
                    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
                }).join('&');
                console.log("Sending data via $http.post");
                $http({
                    method: 'POST',
                    url: googleScript,
                    data: encoded,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(response) {
                        toggleOverlay();
                        reset(data);
                        console.log("Form submit completed");
                        return true;
                    },
                    function(response) { // optional
                        console.log("Form submit failed");
                        reset();
                        return false;
                    });
            }
        };
    };

    angular.module('apolloCinema').controller('contactController', ['$http', ContactController]);
}());