"use strict";
(function () {
    let MovieListingController = function ($rootScope, $state, apiGet) {

        let vm = this;

        vm.getList = function (pageNumber) {
            window.scrollTo(0, 0);
            apiGet.movieList(pageNumber).then(function (result) {
                console.log(result);
                vm.movieNameList = [];
                vm.moviePosterList = [];
                for (let i = 1; i < 19; i++) {
                    vm.movieNameList[i] = result.results[i].title;
                    vm.moviePosterList[i] = "https://image.tmdb.org/t/p/w500" + result.results[i].poster_path;
                }

                vm.moreInfo = function (movieName) {
                    vm.callMoreInfo(movieName);
                };

                vm.callMoreInfo = function (movieName) {
                    $state.go("movieinfo").then(function () {
                        $rootScope.$emit("callMoreInfo", movieName);
                    });
                };
            })
        };
        vm.getList(1);
    };

    angular.module("apolloCinema").controller("MovieListingController", ["$rootScope", "$state", "apiGet", MovieListingController]);
}());