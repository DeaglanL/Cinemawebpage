"use strict";
(function () {

    let SearchController = function ($rootScope, apiGet, $state) {
        let vm = this;

        vm.on = $rootScope.$on("callSearch", function (event, sTerm) {
            vm.search(sTerm);
        });

        vm.search = function (term) {
            apiGet.getMovie(term).then(function (result) {
                var search = document.getElementById("results");
                var html = "";
                html += "<h2 id = \"searchResultTitle\">Search results:</h2>";

                result.results.forEach(function (movie) {
                    vm.searchMovieName = movie.title;
                    html += "<div id=\"searchResult\" class=\"row\" >" +
                        "        <div class=\"col-md-6\">" +
                        "          <a ng-model=\"movieName\" ng-click=\"ctrl.moreInfo(ctrl.searchMovieName)\">" +
                        "            <img id=\"searchMoviePoster\" class=\"img-fluid rounded mb-3 mb-md-0\" src=\"https://image.tmdb.org/t/p/w500" + movie.poster_path + "\" width=\"50%\" align=\"middle\">" +
                        "          </a>" +
                        "        </div>" +
                        "        <div class=\"col-md-5\">" +
                        "          <h3>" + movie.title + "</h3>" +
                        "          <p>Release Date: " + movie.release_date + "</p>" +
                        "          <p>" + movie.overview + "</p>" +
                        "          <a class=\"btn btn-primary\">More Info" +
                        "            <span class=\"glyphicon glyphicon-chevron-right\"></span>" +
                        "          </a>" +
                        "        </div>" +
                        "      </div><hr>";

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
            });
        };
    };
    angular.module("apolloCinema").controller("SearchController", ["$rootScope", "apiGet", "$state", SearchController]);
}());