"use strict";
(function () {

    let indexController = function ($state, $rootScope) {
        let vm = this;
        vm.userLoginHide = false;
        vm.userLoginShow = false;
        vm.userName = $rootScope.indexUsername;

        vm.searchBar = function (sTerm) {
            $state.go("search").then(function () {
                vm.callSearch(sTerm);
            });

        };
        vm.callSearch = function (sTerm) {
            $rootScope.$emit("callSearch", sTerm);
        };

        console.log($rootScope.indexLoginStatus);

        if ($rootScope.indexLoginStatus = true){
            vm.showLoginAndRegister = false;
            console.log(vm.showLoginAndRegister);
        }
        else{
            vm.showLoginAndRegister = true;
            console.log(vm.showLoginAndRegister);
        }



    };

    angular.module("apolloCinema").controller("indexController", ["$state", "$rootScope", indexController]);
}());