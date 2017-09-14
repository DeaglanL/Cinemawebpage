(function() {

    var indexController =  function($state) {
        var vm = this;

        vm.searchBar = function () {
            console.log("enter");
            $state.go('search');

            vm.callSearch = function () {
                vm.$emit("callSearch", vm.sTerm);
            }
            
        };
    };

    angular.module('apolloCinema').controller('indexController', ['$state' , indexController]);
}());