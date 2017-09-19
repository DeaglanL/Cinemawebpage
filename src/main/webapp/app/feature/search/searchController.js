(function() {

    var SearchController = function (apiGet, $rootScope) {
        var vm = this;


        vm.on = $rootScope.$on("callSearch", function(event, sTerm){
                vm.search(sTerm);
            });

        vm.search = function (term) {
            apiGet.getMovie(term).then(function (result) {
                var search = document.getElementById("results");
                var html = "";
                html += "<h2 id = \"searchResultTitle\">Search results:</h2>";

                result.results.forEach(function (movie) {
                    html += "<div id=\"searchResult\" class=\"row\" >" +
                        "        <div class=\"col-md-6\">" +
                        "          <a href=\"#\">" +
                        "            <img id=\"moviePoster\" class=\"img-fluid rounded mb-3 mb-md-0\" src=\"https://image.tmdb.org/t/p/w500" + movie.poster_path +"\" width=\"50%\" align=\"middle\">" +
                        "          </a>" +
                        "        </div>" +
                        "        <div class=\"col-md-5\">" +
                        "          <h3>"+ movie.title +"</h3>" +
                        "          <p>Release Date: "+ movie.release_date +"</p>" +
                        "          <p>" + movie.overview + "</p>" +
                        "          <a class=\"btn btn-primary\" ui-sref=\"home\">More Info" +
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