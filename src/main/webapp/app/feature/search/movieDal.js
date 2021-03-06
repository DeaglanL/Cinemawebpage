"use strict";

let apiKey = "c00a3e5661629abbe2531b560b75a9cc";

(function () {

    angular.module("apolloCinema").service("movieDal", ["dal", movieDal]);

    function movieDal(dal) {

        this.getMovie = function (term) {
            return dal.http.GET("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + term);
        };

        this.getMovieInfo = function (movieID) {
            return dal.http.GET("https://api.themoviedb.org/3/movie/" + movieID + "?api_key=" + apiKey + "&language=en-US");
        };

        this.similarMovie = function (movieID) {
            return dal.http.GET("https://api.themoviedb.org/3/movie/" + movieID + "/similar?api_key=" + apiKey + "&language=en-US&page=1");
        };

        this.latestMovie = function () {
            return dal.http.GET("https://api.themoviedb.org/3/movie/latest?api_key=" + apiKey + "&language=en-US");
        };

        this.popularMovie = function () {
            return dal.http.GET("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=en-US&page=1&region=GB");
        };

        this.movieVideo = function (movieID) {
            return dal.http.GET("https://api.themoviedb.org/3/movie/" + movieID + "/videos?api_key=" + apiKey + "&language=en-US");
        };

        this.movieList = function (pageNumber) {
            return dal.http.GET("https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" + pageNumber);
        }

        this.upComingMovie = function (pageNumber) {
            return dal.http.GET("https://api.themoviedb.org/3/movie/upcoming?api_key=" + apiKey + "&language=en-US&page=" + pageNumber + "&region=GB");
        }


    }
}());
