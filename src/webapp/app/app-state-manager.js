"use strict";

(function () {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/homepage");

        $stateProvider.state("homepage", {
            url: "/homepage",
            templateUrl: "app/features/homepage/homepage.html"
        }).state("contact", {
                url: "/contact",
                templateUrl: "app/features/contact/contact.html"
        })
    });
}());