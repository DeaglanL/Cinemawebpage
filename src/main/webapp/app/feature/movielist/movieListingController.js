"use strict";
(function () {
    let MovieListingController = function ($rootScope, $state, apiGet) {

        let vm = this;

        vm.getList = function () {
            apiGet.movieList().then(function (result) {
                console.log(result);
                let search = document.getElementById("movieListElement");
                let html = "";

                result.results.forEach(function (movie) {

                    html += "<div class=\"col-lg-4 mb-4\">\n" +
                        "                    <div class=\"card h-100\">\n" +
                        "                        <center><img id=\"listMoviePoster\" class=\"img-fluid rounded mb-3 mb-md-0\" src=\"https://image.tmdb.org/t/p/w500" + movie.poster_path + "\" width=\"70%\"><\center>" +
                        "                        <div class=\"card-body\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"card-footer\">\n" +
                        "                            <p class=\"card-text\">" + movie.title + "</p>\n" +
                        "                            <a href=\"#\" class=\"btn btn-primary\">More Info</a>\n" +
                        "                        </div>\n" +
                        "                    </div>\n" +
                        "                </div>"
                });

                vm.moreInfo = function (movieName) {
                    vm.callMoreInfo(movieName);
                };

                vm.callMoreInfo = function (movieName) {
                    $state.go("movieinfo").then(function () {
                        $rootScope.$emit("callMoreInfo", movieName);
                    });
                };

                search.innerHTML = html;
                return result;

            })
        }
        vm.getList();
    };

    angular.module("apolloCinema").controller("MovieListingController", ["$rootScope", "$state", "apiGet", MovieListingController]);
}());