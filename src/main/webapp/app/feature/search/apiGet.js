"use strict";
(function() {

    let apiGet =  function(movieDal) {

        this.getMovie = function (term)
        {
            return movieDal.getMovie(term);
        };

        this.getMovieInfo = function (movieID)
        {
            return movieDal.getMovieInfo(movieID);
        };

        this.similarMovie = function (term)
        {
            return movieDal.similarMovie(term);
        };

        this.latestMovie = function ()
        {
            return movieDal.latestMovie();
        };

        this.popularMovie = function ()
        {
            return movieDal.popularMovie();
        };

        this.movieVideo = function (movieID)
        {
            return movieDal.movieVideo(movieID);
        };

        this.movieList = function (movieID)
        {
            return movieDal.movieList(movieID);
        };

    };

    angular.module("apolloCinema").service("apiGet", ["movieDal",apiGet]);
}());
