"use strict";

(function() {

    const ContactController =  function($http) {
        const vm = this;

        vm.phoneInvalid = false;
        vm.emailInvaild = false;
        vm.thankYou = false;

        vm.error = false;
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
            // language=JSRegexp
            let reEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            return reEmail.test(email);
        }

        function isValidPhone(phone) { // see:
            let rePhone = /^07([\d]{3})[(\D\s)]?[\d]{3}[(\D\s)]?[\d]{3}$/;
            return rePhone.test(phone);
        }

        function checkIfRobot(honeypot) {
            return !(honeypot==="");
        }

        function reset(data) {
            data.name = "";
            data.phone = "";
            data.email = "";
            data.message = "";
            data.honeypot = "";
        }

        vm.handleFormSubmit = function (data) {
            if (checkIfRobot(data.honeypot)) {
                return false;
            }
            if (!isValidPhone(data.phone)) {
                vm.phoneInvalid = true;
                return false;
            } else {
                vm.phoneInvalid = false;
            }
            if (!isValidEmail(data.email)) {
                vm.emailInvaild = true;
                return false;
            } else {
                vm.emailInvaild = false;
                let googleScript = "https://script.google.com/macros/s/AKfycbzCVcDrHI_yn2LPjr45k7r-E5Sw6PKTVph8jmNJTz2FtHAGkNne/exec";
                let encoded = Object.keys(data).map(function (k) {
                    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
                }).join("&");
                $http({
                    method: "POST",
                    url: googleScript,
                    data: encoded,
                    headers: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function() {
                        toggleOverlay();
                        reset(data);
                        return true;
                    },function(response) {
                        vm.error = true;
                        vm.errorStatus = response.status;
                        reset(data);
                        return false;
                    });
            }
        };
    };

    cinemaApp.controller("ContactController", ["$http", ContactController]);
}());