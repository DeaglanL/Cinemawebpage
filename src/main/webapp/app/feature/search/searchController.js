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
                result.results.forEach(function (movie) {
                    html += "<h1 class=\"mt-4 mb-3\">" + movie.title + "</h1> <br>";
                    html += "<h3 class=\"my-3\"> Movie Description </h3>" + "<p>" + movie.overview + "</p>";
                    html += "<div class=\"col-md-8\"><img class=img-fluid src=\"https://image.tmdb.org/t/p/w500" + movie.poster_path + "\"></div>";
                });
                search.innerHTML = html;
            });
        };
    };
    angular.module('apolloCinema').controller('SearchController', ['apiGet','$rootScope' , SearchController]);
}());