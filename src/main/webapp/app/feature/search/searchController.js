"use strict";
(function () {

    let SearchController = function ($rootScope, apiGet, $state, $compile, $scope) {
        let vm = this;

        vm.on = $rootScope.$on("callSearch", function (event, sTerm) {
            vm.search(sTerm);
        });

        vm.search = function (term) {
            apiGet.getMovie(term).then(function (result) {
                let search = document.getElementById("results");
                let html = "";
                html += "<h2 id = \"searchResultTitle\">Search results:</h2>";

                result.results.forEach(function (movie) {
                    vm.movieNameSearch = movie.title;
                    html += "<div id=\"searchResult\" class=\"row\" >" +
                        "        <div class=\"col-md-6\">" +
                        "          <a href=\"#\">" +
                        "            <img id=\"moviePoster\" class=\"img-fluid rounded mb-3 mb-md-0\" src=\"https://image.tmdb.org/t/p/w500" + movie.poster_path + "\" width=\"50%\" align=\"middle\">" +
                        "          </a>" +
                        "        </div>" +
                        "        <div class=\"col-md-5\">" +
                        "          <h3>" + movie.title + "</h3>" +
                        "          <p>Release Date: " + movie.release_date + "</p>" +
                        "          <p>" + movie.overview + "</p>" +
                        "          <a class=\"btn btn-primary\" ui-sref=\"home\" ng-model=\"movieName\" ng-click=\"ctrl.moreInfo(ctrl.movieNameSearch)\">More Info" +
                        "            <span class=\"glyphicon glyphicon-chevron-right\"></span>" +
                        "          </a>" +
                        "        </div>" +
                        "      </div><hr>";

                });
                search.innerHTML = html;


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