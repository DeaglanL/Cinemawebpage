(function() {

    var apiGet =  function(movieDal) {

        this.getMovie = function (term)
        {
            console.log("in api get");
            return movieDal.getMovie(term);
        };
    };

    angular.module('apolloCinema').service('apiGet', ['movieDal',apiGet]);
}());
