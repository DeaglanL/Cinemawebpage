"use strict";
(function () {
    let HomeController = function ($rootScope, $state, apiGet) {

        let vm = this;

        vm.getPic = function () {
            let slideShowMovieName1 = "IT";
            let slideShowMovieName2 = "The Hitman's bodyguard";
            let slideShowMovieName3 = "Hitman";

            vm.slideShowMovie1 = slideShowMovieName1;
            vm.slideShowMovie2 = slideShowMovieName2;
            vm.slideShowMovie3 = slideShowMovieName3;

            apiGet.getMovie(slideShowMovieName1).then(function (result) {
                vm.Src1 = "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
                let movieID = result.results[0].id;

                apiGet.getMovieInfo(movieID).then(function (result2) {
                    vm.movieTagline1 = result2.tagline;
                })
            });
            apiGet.getMovie(slideShowMovieName2).then(function (result) {
                vm.Src2 = "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
                let movieID = result.results[0].id;

                apiGet.getMovieInfo(movieID).then(function (result2) {
                    vm.movieTagline2 = result2.tagline;
                })
            });
            apiGet.getMovie(slideShowMovieName3).then(function (result) {
                vm.Src3 = "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
                let movieID = result.results[0].id;

                apiGet.getMovieInfo(movieID).then(function (result2) {
                    vm.movieTagline3 = result2.tagline;
                })
            });

            let galleryFilmName1 = "Spider man Homecoming";
            let galleryFilmName2 = "Baby Driver";
            let galleryFilmName3 = "Logan";
            let galleryFilmName4 = "John Wick 2";
            let galleryFilmName5 = "War dogs";
            let galleryFilmName6 = "Kingsman: The Secret Service";

            vm.galleryFilm1 = galleryFilmName1;
            vm.galleryFilm2 = galleryFilmName2;
            vm.galleryFilm3 = galleryFilmName3;
            vm.galleryFilm4 = galleryFilmName4;
            vm.galleryFilm5 = galleryFilmName5;
            vm.galleryFilm6 = galleryFilmName6;

            apiGet.getMovie(galleryFilmName1).then(function (result) {
                vm.GF1 = "https://image.tmdb.org/t/p/w500" + result.results[0].poster_path;
            });
            apiGet.getMovie(galleryFilmName2).then(function (result) {
                vm.GF2 = "https://image.tmdb.org/t/p/w500" + result.results[0].poster_path;
            });
            apiGet.getMovie(galleryFilmName3).then(function (result) {
                vm.GF3 = "https://image.tmdb.org/t/p/w500" + result.results[0].poster_path;
            });
            apiGet.getMovie(galleryFilmName4).then(function (result) {
                vm.GF4 = "https://image.tmdb.org/t/p/w500" + result.results[0].poster_path;
            });
            apiGet.getMovie(galleryFilmName5).then(function (result) {
                vm.GF5 = "https://image.tmdb.org/t/p/w500" + result.results[0].poster_path;
            });
            apiGet.getMovie(galleryFilmName6).then(function (result) {
                vm.GF6 = "https://image.tmdb.org/t/p/w500" + result.results[0].poster_path;
            });


            let comingSoonMovieName1 = "Kingsman: The Golden Circle";
            let comingSoonMovieName2 = "The Lego Ninjago Movie";
            let comingSoonMovieName3 = "Blade Runner 2049";
            let comingSoonMovieName4 = "Thor: Ragnarok";
            let comingSoonMovieName5 = "Justice League";

            vm.comingSoonFilm1 = comingSoonMovieName1;
            vm.comingSoonFilm2 = comingSoonMovieName2;
            vm.comingSoonFilm3 = comingSoonMovieName3;
            vm.comingSoonFilm4 = comingSoonMovieName4;
            vm.comingSoonFilm5 = comingSoonMovieName5;

            vm.moreInfo = function (movieName) {
                vm.callMoreInfo(movieName);
            };

            vm.callMoreInfo = function (movieName) {
                $state.go("movieinfo").then(function () {
                    $rootScope.$emit("callMoreInfo", movieName);
                });
            };


        };

        vm.getPic();

    };
    angular.module("apolloCinema").controller("HomeController", ["$rootScope", "$state", "apiGet", HomeController]);
}());