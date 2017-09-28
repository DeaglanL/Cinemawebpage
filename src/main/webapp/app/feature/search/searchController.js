"use strict";
(function () {

    let SearchController = function ($rootScope, apiGet, $state, $compile, $scope) {
        let vm = this;

        vm.on = $rootScope.$on("callSearch", function (event, sTerm) {
            vm.search(sTerm);
        });

        vm.search = function (term) {
            apiGet.getMovie(term).then(function (result) {

                vm.searchMovieNameList = [];
                vm.searchMoviePosterList = [];
                vm.searchMovieOverviewList = [];

                for (let i = 0; i < 6; i++) {
                    vm.searchMovieNameList[i] = result.results[i].title;
                    vm.searchMoviePosterList[i] = "https://image.tmdb.org/t/p/w500" + result.results[i].poster_path;
                    vm.searchMovieOverviewList [i] = result.results[i].overview;
                }


                vm.moreInfo = function (movieName) {
                    vm.callMoreInfo(movieName);
                };

                vm.callMoreInfo = function (movieName) {
                    $state.go("movieinfo").then(function () {
                        $rootScope.$emit("callMoreInfo", movieName);
                    });
                };

                return result;
            });
        };
    };
    angular.module("apolloCinema").controller("SearchController", ["$rootScope", "apiGet", "$state", "$compile", "$scope", SearchController]);
}());