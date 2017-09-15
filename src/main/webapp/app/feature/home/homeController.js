(function() {
    var HomeController =  function(apiGet) {

        var vm = this;


        vm.getPic = function () {
            var slideShowMovieName1 = "IT";
            var slideShowMovieName2 = "The Hitman's bodyguard";
            var slideShowMovieName3 = "Detroit";

            vm.slideShowMovie1 = slideShowMovieName1;
            vm.slideShowMovie2 = slideShowMovieName2;
            vm.slideShowMovie3 = slideShowMovieName3;

            apiGet.getMovie(slideShowMovieName1).then(function (result) {
                vm.Src1 =  "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
            })
            apiGet.getMovie(slideShowMovieName2).then(function (result) {
                vm.Src2 =  "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
            })
            apiGet.getMovie(slideShowMovieName3).then(function (result) {
                vm.Src3 =  "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
            })

            var galleryFilmName1 = "Spider man Homecoming";
            var galleryFilmName2 = "Baby Driver";
            var galleryFilmName3 = "Logan";
            var galleryFilmName4 = "John Wick 2";
            var galleryFilmName5 = "War dogs";
            var galleryFilmName6 = "Kingsman: The Secret Service";

            vm.galleryFilm1 = galleryFilmName1;
            vm.galleryFilm2 = galleryFilmName2;
            vm.galleryFilm3 = galleryFilmName3;
            vm.galleryFilm4 = galleryFilmName4;
            vm.galleryFilm5 = galleryFilmName5;
            vm.galleryFilm6 = galleryFilmName6;

            apiGet.getMovie(galleryFilmName1).then(function (result) {
                vm.GF1 =  "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
            })
            apiGet.getMovie(galleryFilmName2).then(function (result) {
                vm.GF2 =  "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
            })
            apiGet.getMovie(galleryFilmName3).then(function (result) {
                vm.GF3 =  "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
            })
            apiGet.getMovie(galleryFilmName4).then(function (result) {
                vm.GF4 =  "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
            })
            apiGet.getMovie(galleryFilmName5).then(function (result) {
                vm.GF5 =  "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
            })
            apiGet.getMovie(galleryFilmName6).then(function (result) {
                vm.GF6 =  "https://image.tmdb.org/t/p/w500" + result.results[0].backdrop_path;
            })

            var comingSoonMovieName1 = "Kingsman: The Golden Circle";
            var comingSoonMovieName2 = "The Lego Ninjago Movie";
            var comingSoonMovieName3 = "Blade Runner 2049";
            var comingSoonMovieName4 = "Thor: Ragnarok";
            var comingSoonMovieName5 = "Justice League";

            vm.comingSoonFilm1 = comingSoonMovieName1;
            vm.comingSoonFilm2 = comingSoonMovieName2;
            vm.comingSoonFilm3 = comingSoonMovieName3;
            vm.comingSoonFilm4 = comingSoonMovieName4;
            vm.comingSoonFilm5 = comingSoonMovieName5;



        }

        vm.getPic();

    };
    angular.module("apolloCinema").controller("HomeController", ["apiGet", HomeController]);
}());