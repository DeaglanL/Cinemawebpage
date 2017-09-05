'use strict'

let apiKey = "c00a3e5661629abbe2531b560b75a9cc";
let movObj;




let getMovByTitle = (title) => {
    let req = new XMLHttpRequest();
    req.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + title);
    req.responseType = "json";
    req.send();
    req.onload = function () {
        movObj = req.response;
        return movObj;
    }
}

let getTitle = () => {
    return movObj.results[0].title;
}

let getOverview = () => {
    return movObj.results[0].overview;
}

let getReleaseDate = () => {
    return movObj.results[0].release_date;
}

let getPosterPath = (size) => {
    return "https://image.tmdb.org/t/p/" + size + movObj.results[0].poster_path;
}

let getBackDropPath = (size) => {
    return "https://image.tmdb.org/t/p/" + size + movObj.results[0].backdrop_path;
}

let getLang = () => {
    return movObj.results[0].original_language;
}

let getPopularity = () => {
    return Math.round(movObj.results[0].vote_average);
}


