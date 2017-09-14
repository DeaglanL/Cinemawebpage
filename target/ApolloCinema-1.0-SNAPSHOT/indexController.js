(function() {

    var indexController =  function($state) {
        var vm = this;

        vm.searchBar = function () {


                    console.log("enter");
                    $state.go('search');

        };
    };

    angular.module('apolloCinema').controller('indexController', ['$state' , indexController]);
}());