"use strict"
describe("SearchController", function() {
    beforeEach(module('apolloCinema'));
    let $controller;


    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('Search Test', function() {

        var controller;

        beforeEach((function ($controller) {
            var $scope = {};

            controller = $controller('SearchController',{$scope:$scope});
            console.log("got past cont");
        }));


        it('Search controller to be defined', function() {
            expect(controller).toBeDefined();
        });

        it('Searches for transformers and checks ', function() {
            controller.search("Transformers").then(function (result) {
                expect(result.results[0].title).toEqual("Transformers");
            });
        });
    });
});