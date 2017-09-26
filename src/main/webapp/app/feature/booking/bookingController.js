"use strict";

(function () {

    let BookingController = function ($rootScope) {
        let vm = this;

        vm.movieTitle = $rootScope.sharedMovieName;
        vm.moviePosterThumbnail = "";
        vm.movieLength = "##mins";
        vm.cinema = "Cinema";
        vm.screenName = "Screen ##";
        vm.screeningDate = "##/##/####";
        vm.screeningTime = "##:##";

        vm.numAdults = 0;
        vm.numConcessions = 0;
        vm.ticketPriceAdult = "10.00";
        vm.ticketPriceConcession = "7.50";

        vm.submitTicketDetails = function () {
            let ticket = {
                "adults": vm.numAdults,
                "concessions": vm.numConcessions,
                "screeningID": "",
                "seatID": ""
            };
        };

        cinemaApp.controller('MainCtrl2', ['$scope', 'dataShare',
            function ($scope, dataShare) {

                $scope.text = '';
                $scope.$on('data_shared', function () {
                    var text = dataShare.getData();
                    $scope.text = text;
                });
            }
        ]);
    };

    angular.module("apolloCinema").controller("BookingController", ["$rootScope", BookingController]);
}());