var impMovieName = "TestName";
var impMovieDescription = "TestDes";
var impMovieReleaseDate = "TestRel";
var impMovieLanguage = "en";
var impMoviepopularity = "1";
var impMovieBackDrop;
var impMoviePoster;


var movieList = [];

var movie = movieMaker(impMovieName, impMovieDescription, impMovieReleaseDate, impMovieLanguage, impMoviepopularity);
var returnmovie;



function movieMaker(movieName, movieDescription, movieReleaseDate, movieLanguage, moviepopularity) {

    var movie = {
        MovieName: movieName,
        MovieDescription: movieDescription,
        MovieReleaseDate: movieReleaseDate,
        MovieLanguage: movieLanguage,
        Moviepopularity: moviepopularity
    };
    return movie;
}

var para = document.createElement("p");
var text = document.createTextNode(movie.MovieName);
para.appendChild(text);
document.getElementById("latestfilms1").appendChild(para);

//paragraph.appendChild(text);
//let printMovieInfo = document.getElementById("nowshowingsubheading")
//printMovieInfo.appendChild(paragraph);