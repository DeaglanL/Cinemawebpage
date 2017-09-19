(function() {

    var MovieInfoController =  function(apiGet, $rootScope) {
        var vm = this;

        vm.on = $rootScope.$on("callMoreInfo", function(event, movieName){
            vm.searchMoreInfo(movieName);
        });

        vm.searchMoreInfo = function (name) {
            apiGet.getMovie(name).then(function (result) {

                vm.movie = result.results[0];
                console.log(result);

                var searchMoteInfoPoster = document.getElementById("mofreinfomovieposter");
                var html = "";

                document.getElementById("moreinfopara").innerHTML = result.results[0].overview;
                document.getElementById("moreinfotitle").innerHTML = result.results[0].title;

                html += "<img class=\"img-fluid\" src=\"https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path +"\" alt=\"\">"


                searchMoteInfoPoster.innerHTML = html;
            });

        };


    };

    angular.module('apolloCinema').controller('MovieInfoController', ["apiGet","$rootScope",MovieInfoController]);
}());