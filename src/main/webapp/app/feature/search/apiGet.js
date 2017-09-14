(function() {

    var apiGet =  function(movieDal) {

        this.getMovie = function (term)
        {
            return movieDal.getMovie(term);
        };
    };

    angular.module('apolloCinema').service('apiGet', ['movieDal',apiGet]);
}());
