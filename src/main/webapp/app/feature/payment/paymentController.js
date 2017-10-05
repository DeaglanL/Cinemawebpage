"use strict";

(function () {

    let PaymentController = function ($rootScope) {
        let vm = this;

        function init() {
            try{
                vm.movie = {"id":$rootScope.sharedMovie.results[0].id,"title":$rootScope.sharedMovie.results[0].title,"poster":"https://image.tmdb.org/t/p/w500" + $rootScope.sharedMovie.results[0].poster_path,length:$rootScope.sharedMovie2.runtime};
                vm.ticket = $rootScope.ticket;
                vm.screening = $rootScope.screening;
            } catch(err){
                vm.error = true;
                vm.errorStatus = "TypeError";
            }
        }

        init();

        vm.sendToPaypal = function () {

        };

    };

    angular.module("apolloCinema").controller("PaymentController", ["$rootScope", PaymentController]);
}());