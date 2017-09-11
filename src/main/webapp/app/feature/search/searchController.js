(function() {

    var SearchController =  function(apiGet) {
        var vm = this;

        vm.searchNotDone = true;
        vm.search = function (term) {
            vm.searchNotDone = false;
            console.log("click");
            apiGet.getMovie(term).then(function (result) {
                console.log(result);

                var search = document.getElementById("results");
                var html;

                result.results.forEach(function (movie) {
                    html += "<h1 class=\"mt-4 mb-3\">" + movie.title + "</h1> <br>";
                    html += "<h3 class=\"my-3\">Movie Description</h3>\n" + "<p>" + movie.overview + "</p>";
                   // html += "<div class=\"col-md-8\"><img class=img-fluid src=\"https://image.tmdb.org/t/p/\w500" + movie.poster_path + "\"" > "+" < /div>"
                });

            });

        }
        angular.module('apolloCinema').controller('SearchController', ['apiGet', SearchController]);
    })