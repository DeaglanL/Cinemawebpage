(function() {

    var MovieInfoController =  function(apiGet, $rootScope) {
        var vm = this;

        vm.on = $rootScope.$on("callMoreInfo", function(event, movieName){
            vm.searchMoreInfo(movieName);
        });

        vm.searchMoreInfo = function (name) {
            console.log(name);
            apiGet.getMovie(name).then(function (result) {
                vm.movie = result.results[0];
                console.log(result);
                vm.displayMovieName = name;
                document.getElementById("moreinfopara").innerHTML = result.results[0].overview;



            });
        };


    };

    angular.module('apolloCinema').controller('MovieInfoController', ["apiGet","$rootScope",MovieInfoController]);
}());