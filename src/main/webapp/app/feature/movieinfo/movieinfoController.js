(function() {

    let MovieInfoController =  function($rootScope,$state,apiGet,movieDal) {
        let vm = this;

        vm.on = $rootScope.$on("callMoreInfo", function(event, movieName){
            vm.searchMoreInfo(movieName);
        });

        vm.moreInfo = function (movieName) {
            vm.callMoreInfo(movieName);
        };

        vm.callMoreInfo = function (movieName) {
            $state.go("movieinfo").then(function(){ $rootScope.$emit("callMoreInfo", movieName);} );
        };

        vm.searchMoreInfo = function (name) {

            apiGet.getMovie(name).then(function (result) {
                console.log(result);

                let searchMoreInfoPoster = document.getElementById("mofreinfomovieposter");
                let html = "";
                let movieID = result.results[0].id;
                vm.movieName = result.results[0].title;
                console.log(movieID);

                document.getElementById("OverView").innerHTML = result.results[0].overview;
                document.getElementById("Title").innerHTML = result.results[0].original_title;
                document.getElementById("Adult").innerHTML = result.results[0].adult;
                document.getElementById("Language").innerHTML = result.results[0].original_language;
                html += "<img class=\"img-fluid\" src=\"https://image.tmdb.org/t/p/w500" + result.results[0].poster_path +"\" height=\"70%\" width=\"70%\">"
                searchMoreInfoPoster.innerHTML = html;

                movieDal.getMovieInfo(movieID).then(function (result2) {
                    console.log(result2);

                    document.getElementById("ReleaseDate").innerHTML = result2.release_date;
                    document.getElementById("Budget").innerHTML = result2.budget;
                    document.getElementById("Revenue").innerHTML = result2.revenue;
                    document.getElementById("Runtime").innerHTML = result2.runtime;
                    document.getElementById("Status").innerHTML = result2.status;
                    document.getElementById("Tagline").innerHTML = result2.tagline;

                });

                movieDal.similarMovie(movieID).then(function (result3) {
                    console.log(result3.results);
                    let similarFilmhtml = "";
                    let searchMoreInfoRecmon = document.getElementById("movieInfoRecmon");

                    similarFilmhtml +=
                        "<div class=\"col-md-3 col-sm-6 mb-4\">" +
                        "<a>" +
                        "<img class= \"img-fluid\" src=\"http://placehold.it/500x300\" ng-model=\"movieName\" ng-click=\"ctrl.moreInfo(ctrl.movieName)\">" +
                        "</a>" +
                        "</div>"

                    searchMoreInfoRecmon.innerHTML = similarFilmhtml;
                });

            });

        };

    };

    angular.module('apolloCinema').controller('MovieInfoController', ["$rootScope","$state","apiGet","movieDal",MovieInfoController]);
}());