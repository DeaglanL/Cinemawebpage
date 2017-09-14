(function() {

    var indexController =  function($state, $rootScope) {
        var vm = this;

        vm.searchBar = function (sTerm) {
            $state.go("search");
            vm.callSearch(sTerm);
        };

        vm.callSearch = function (sTerm) {
            $rootScope.$emit("callSearch", sTerm);
        };
    };

    angular.module("apolloCinema").controller("indexController", ["$state", "$rootScope", indexController]);
}());