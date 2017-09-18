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
        }

        function isValidEmail(email) { // see:
            var reEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return reEmail.test(email);
        }

        function isValidPhone(phone) { // see:
            var rePhone = /^07([\d]{3})[(\D\s)]?[\d]{3}[(\D\s)]?[\d]{3}$/i;
            return rePhone.test(phone);
        }

        function checkIfRobot(honeypot) {
            return !!honeypot;
        }

        function reset(data) {
            data.name = "";
            data.phone = "";
            data.email = "";
            data.message = "";
            data.honeypot = "";
        }

        vm.handleFormSubmit = function (data) {
            if (checkIfRobot(data.honeypot)) {  //if form is filled, form will not be submitted
                return false;
            }
            if (!isValidPhone(data.phone)) {
                vm.phoneInvalid = !vm.phoneInvalid;
                return false;
            }
            if (!isValidEmail(data.email)) {   // if email is not valid show error
                vm.emailInvaild = !vm.emailInvaild;
                return false;
            } else {
                var googleScript = "https://script.google.com/macros/s/AKfycbzCVcDrHI_yn2LPjr45k7r-E5Sw6PKTVph8jmNJTz2FtHAGkNne/exec";
                var encoded = Object.keys(data).map(function (k) {
                    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
                }).join("&");
                $http({
                    method: "POST",
                    url: googleScript,
                    data: encoded,
                    headers: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function(response) {
                        toggleOverlay();
                        reset(data);
                        return true;
                    },
                    function(response) { // optional
                        reset();
                        return false;
                    });
            }
        };
    };

    cinemaApp.controller("contactController", ["$http", ContactController]);
}());