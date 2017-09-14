"use strict";

var apiKey = "c00a3e5661629abbe2531b560b75a9cc";

(function () {

    angular.module("apolloCinema").service("movieDal", ["dal", movieDal]);

    function movieDal (dal) {

        this.getMovie = function (term) {
            console.log("in movie dal");
            console.log("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + term);
            return dal.http.GET("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + term);
        };
    }
}());
