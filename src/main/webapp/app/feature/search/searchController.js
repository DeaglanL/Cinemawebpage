(function() {

    var SearchController =  function(apiGet) {
        var vm = this;

        vm.searchNotDone = true;
        vm.search = function(term) {
        vm.searchNotDone = false;
            console.log("click");
        apiGet.getMovie(term).then(function (result) {
            console.log(result);

        });





        }



    };

    angular.module('apolloCinema').controller('SearchController', ['apiGet', SearchController]);
}());