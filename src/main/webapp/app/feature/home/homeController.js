(function() {
    var HomeController =  function(apiGet) {

        var vm = this;


        vm.getPic = function () {
            apiGet.getMovie("Transformers").then(function (result) {
                vm.Src =  "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
            })
        }

        vm.getPic();

    };
    angular.module("apolloCinema").controller("HomeController", ["apiGet", HomeController]);
}());