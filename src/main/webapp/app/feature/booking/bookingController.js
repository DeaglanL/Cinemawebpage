"use strict";

(function () {

    let BookingController = function ($rootScope) {
        let vm = this;
        let sharedMovieInfo = $rootScope.sharedMovie;
        let sharedMovieInfo2 = $rootScope.sharedMovie2;

        console.log(sharedMovieInfo);

        vm.movieTitle = sharedMovieInfo.results[0].title;
        vm.moviePosterThumbnail = "https://image.tmdb.org/t/p/w500" + sharedMovieInfo.results[0].poster_path;
        vm.movieLength = sharedMovieInfo2.runtime;
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
                    let text = dataShare.getData();
                    $scope.text = text;
                });
            }
        ]);
    };

    angular.module("apolloCinema").controller("BookingController", ["$rootScope", BookingController]);
}());