"use strict";

(function () {

    let BookingController = function ($rootScope) {
        let vm = this;
        let sharedMovieInfo = $rootScope.sharedMovie;
        let sharedMovieInfo2 = $rootScope.sharedMovie2;


        vm.movieTitle = sharedMovieInfo.results[0].title;
        vm.moviePosterThumbnail = "https://image.tmdb.org/t/p/w500" + sharedMovieInfo.results[0].poster_path;
        vm.movieLength = sharedMovieInfo2.runtime;
        vm.cinema = "Cinema";
        vm.screenName = "Screen ##";
        vm.screeningDate = "##/##/####";
        vm.screeningTime = "##:##";

        vm.screenings = [{
            "screeningID": 41,
            "cinema": "London",
            "screenID": 1,
            "time": "14:55",
            "movieID": 3,
            "date": "02/10/17"
        },
            {"screeningID": 42, "cinema": "London", "screenID": 4, "time": "16:20", "movieID": 3, "date": "02/10/17"},
            {
                "screeningID": 43,
                "cinema": "Manchester",
                "screenID": 2,
                "time": "17:10",
                "movieID": 3,
                "date": "02/10/17"
            },
            {
                "screeningID": 44,
                "cinema": "Sheffield",
                "screenID": 1,
                "time": "19:50",
                "movieID": 3,
                "date": "02/10/17"
            },
            {
                "screeningID": 45,
                "cinema": "Manchester",
                "screenID": 5,
                "time": "19:50",
                "movieID": 3,
                "date": "02/10/17"
            },
            {"screeningID": 46, "cinema": "London", "screenID": 4, "time": "20:25", "movieID": 3, "date": "02/10/17"},
            {
                "screeningID": 47,
                "cinema": "Sheffield",
                "screenID": 3,
                "time": "21:30",
                "movieID": 3,
                "date": "02/10/17"
            },
            {
                "screeningID": 48,
                "cinema": "Manchester",
                "screenID": 2,
                "time": "23:00",
                "movieID": 3,
                "date": "02/10/17"
            }];

        vm.ticketPriceAdult = 10;
        vm.ticketPriceConcession = 7.5;

        vm.choose = function (screening) {
            vm.screen = screening.screenID;
            vm.screeningDate = screening.date;
            vm.screeningTime = screening.time;
        };

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