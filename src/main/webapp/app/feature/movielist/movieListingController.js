"use strict";
(function () {
    let MovieListingController = function ($rootScope, $state, apiGet) {

        let vm = this;

        vm.getList = function () {
            vm.pageNumber = 1;

            apiGet.movieList(vm.pageNumber).then(function (result) {
                console.log(result);

                vm.movieNameList1 = result.results[1].title;
                vm.movieNameList2 = result.results[2].title;
                vm.movieNameList3 = result.results[3].title;
                vm.movieNameList4 = result.results[4].title;
                vm.movieNameList5 = result.results[5].title;
                vm.movieNameList6 = result.results[6].title;
                vm.movieNameList7 = result.results[7].title;
                vm.movieNameList8 = result.results[8].title;
                vm.movieNameList9 = result.results[9].title;
                vm.movieNameList10 = result.results[10].title;
                vm.movieNameList11 = result.results[11].title;
                vm.movieNameList12 = result.results[12].title;
                vm.movieNameList13 = result.results[13].title;
                vm.movieNameList14 = result.results[14].title;
                vm.movieNameList15 = result.results[15].title;
                vm.movieNameList16 = result.results[16].title;
                vm.movieNameList17 = result.results[17].title;
                vm.movieNameList18 = result.results[18].title;

                vm.moviePosterList1 = "https://image.tmdb.org/t/p/w500" + result.results[1].poster_path;
                vm.moviePosterList2 = "https://image.tmdb.org/t/p/w500" + result.results[2].poster_path;
                vm.moviePosterList3 = "https://image.tmdb.org/t/p/w500" + result.results[3].poster_path;
                vm.moviePosterList4 = "https://image.tmdb.org/t/p/w500" + result.results[4].poster_path;
                vm.moviePosterList5 = "https://image.tmdb.org/t/p/w500" + result.results[5].poster_path;
                vm.moviePosterList6 = "https://image.tmdb.org/t/p/w500" + result.results[6].poster_path;
                vm.moviePosterList7 = "https://image.tmdb.org/t/p/w500" + result.results[7].poster_path;
                vm.moviePosterList8 = "https://image.tmdb.org/t/p/w500" + result.results[8].poster_path;
                vm.moviePosterList9 = "https://image.tmdb.org/t/p/w500" + result.results[9].poster_path;
                vm.moviePosterList10 = "https://image.tmdb.org/t/p/w500" + result.results[10].poster_path;
                vm.moviePosterList11 = "https://image.tmdb.org/t/p/w500" + result.results[11].poster_path;
                vm.moviePosterList12 = "https://image.tmdb.org/t/p/w500" + result.results[12].poster_path;
                vm.moviePosterList13 = "https://image.tmdb.org/t/p/w500" + result.results[13].poster_path;
                vm.moviePosterList14 = "https://image.tmdb.org/t/p/w500" + result.results[14].poster_path;
                vm.moviePosterList15 = "https://image.tmdb.org/t/p/w500" + result.results[15].poster_path;
                vm.moviePosterList16 = "https://image.tmdb.org/t/p/w500" + result.results[16].poster_path;
                vm.moviePosterList17 = "https://image.tmdb.org/t/p/w500" + result.results[17].poster_path;
                vm.moviePosterList18 = "https://image.tmdb.org/t/p/w500" + result.results[18].poster_path;


                vm.moreInfo = function (movieName) {
                    vm.callMoreInfo(movieName);
                };

                vm.callMoreInfo = function (movieName) {
                    $state.go("movieinfo").then(function () {
                        $rootScope.$emit("callMoreInfo", movieName);
                    });
                };
            })
        }
        vm.getList();
    };

    angular.module("apolloCinema").controller("MovieListingController", ["$rootScope", "$state", "apiGet", MovieListingController]);
}());