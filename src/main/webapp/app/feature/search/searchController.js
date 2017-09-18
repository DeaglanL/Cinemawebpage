(function() {

    var SearchController = function (apiGet, $rootScope) {
        var vm = this;


        vm.on = $rootScope.$on("callSearch", function(event, sTerm){
                vm.search(sTerm);
            });

        vm.search = function (term) {
            apiGet.getMovie(term).then(function (result) {
                var search = document.getElementById("results");
                var html;
                html += "<h2>Search results:</h2>";

                /*result.results.forEach(function (movie) {
                    html += "<h1 class=\"mt-4 mb-3\">" + movie.title + "</h1>";
                    html += "<h3 class=\"my-3\"> Movie Description </h3>" + "<p>" + movie.overview + "</p>";
                    html += "<div class=\"col-md-8\"><img class=img-fluid src=\"https://image.tmdb.org/t/p/w500" + movie.poster_path + "\"></div>";
                });*/

                result.results.forEach(function (movie) {
                    html += "<div class=\"row\">" +
                        "        <div class=\"col-md-7\">" +
                        "          <a href=\"#\">" +
                        "            <img class=\"img-fluid rounded mb-3 mb-md-0\" src=\"https://image.tmdb.org/t/p/w500" + movie.backdrop_path + "\">" +
                        "          </a>" +
                        "        </div>" +
                        "        <div class=\"col-md-5\">" +
                        "          <h3>"+ movie.title +"</h3>" +
                        "          <p>Release Date: "+ movie.release_date +"</p>" +
                        "          <p>" + movie.overview + "</p>" +
                        "          <a class=\"btn btn-primary\" href=\"#\">More Info" +
                        "            <span class=\"glyphicon glyphicon-chevron-right\"></span>" +
                        "          </a>" +
                        "        </div>" +
                        "      </div><hr>";

                });

                search.innerHTML = html;
            });
        };
    };
    angular.module("apolloCinema").controller("SearchController", ["apiGet","$rootScope", SearchController]);
}());