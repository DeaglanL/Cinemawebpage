let impMovieName = "TestName";
let impMovieDescription = "TestDes";
let impMovieReleaseDate = "TestRel";
let impMovieLanguage = "en";
let impMoviepopularity = "1";
let impMovieBackDrop;
let impMoviePoster;


let movieList = [];

let movie = movieMaker(impMovieName, impMovieDescription, impMovieReleaseDate, impMovieLanguage, impMoviepopularity);
let returnmovie;



function movieMaker(movieName, movieDescription, movieReleaseDate, movieLanguage, moviepopularity) {

    let movie = {
        MovieName: movieName,
        MovieDescription: movieDescription,
        MovieReleaseDate: movieReleaseDate,
        MovieLanguage: movieLanguage,
        Moviepopularity: moviepopularity
    };
    return movie;
}



let paragraph = document.createElement("p");
let text = document.createTextNode(movie.MovieName);

//paragraph.appendChild(text);
//let printMovieInfo = document.getElementById("nowshowingsubheading")
//printMovieInfo.appendChild(paragraph);