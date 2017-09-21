"use strict";
cinemaApp.directive('customClick', function() {
    return {
        link: function(scope, element, attrs) {
            element.click(function(){
                scope.$apply(function (){
                    scope.$eval(attrs.customClick);
                });

                event.preventDefault();
            });
        }
    }
});