'use strict'

var apiKey = "c00a3e5661629abbe2531b560b75a9cc";
var movObj;




var getMovByTitle = (title) => {
    var req = new XMLHttpRequest();
    req.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + title);
    req.responseType = "json";
    req.send();
    req.onload = function () {
        movObj = req.response;
        return movObj;
    }
}

function getTitle () {
    return movObj.results[0].title;
}

function getOverview () {
    return movObj.results[0].overview;
}

function getReleaseDate (){
    return movObj.results[0].release_date;
}

function getPosterPath (size) {
    return "https://image.tmdb.org/t/p/" + size + movObj.results[0].poster_path;
}

function getBackDropPath  (size) {
    return "https://image.tmdb.org/t/p/" + size + movObj.results[0].backdrop_path;
}

function getLang  (){
    return movObj.results[0].original_language;
}

function getPopularity ()  {
    return Math.round(movObj.results[0].vote_average);
}


