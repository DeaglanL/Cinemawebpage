"use strict";
(function() {

    let indexController =  function($state, $rootScope) {
        let vm = this;

        vm.searchBar = function (sTerm) {
            $state.go("search").then(function () {
                vm.callSearch(sTerm);
            });

        };

        vm.callSearch = function (sTerm) {
            $rootScope.$emit("callSearch", sTerm);
        };
    };

    angular.module("apolloCinema").controller("indexController", ["$state", "$rootScope", indexController]);
}());