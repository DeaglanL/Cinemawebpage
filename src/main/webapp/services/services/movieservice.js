(function() {

    let MovieService =  function(movieDal) {

        this.getMovies = function()
        {
            return movieDal.getMovies();
        };

        this.saveMovie = function(movie)
        {
            return movieDal.saveMovie(movie);
        };
    };

    cinemaApp.service("movieService", ["movieDal", MovieService]);
}());