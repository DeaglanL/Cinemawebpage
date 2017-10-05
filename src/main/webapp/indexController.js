"use strict";
(function () {

    let indexController = function ($state, $rootScope) {
        let vm = this;
        vm.userLoginHide = false;
        vm.userLoginShow = false;
        vm.userName = $rootScope.userName;
        vm.loginStatus = $rootScope.indexLoginStatus;

        vm.searchBar = function (sTerm) {
            $state.go("search").then(function () {
                vm.callSearch(sTerm);
            });

        };
        vm.callSearch = function (sTerm) {
            $rootScope.$emit("callSearch", sTerm);
        };

        vm.showLoginAndRegister = function () {
            if (vm.loginStatus === true) return false;
            else return false;
        }


    };

    angular.module("apolloCinema").controller("indexController", ["$state", "$rootScope", indexController]);
}());