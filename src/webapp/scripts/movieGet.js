'use strict'

let apiKey = "c00a3e5661629abbe2531b560b75a9cc";


class Movie {

 constructor(title){
     this.title = title;


 }


     getMovByTitle(title){
         console.log("");
         let movObj;
         let req = new XMLHttpRequest();
         console.log("https://api.themoviedb.org/3/search/movie?api_key="+ apiKey + "&query=" + title);
         req.open("GET", "https://api.themoviedb.org/3/search/movie?api_key="+ apiKey + "&query=" + title);
         req.responseType = "json";
         req.send();
         req.onload = function(){
             movObj = req.response;
             console.log(movObj);

         }

    }


}


function tester(){
  let mg = new Movie("transformers");

  mg.getMovByTitle("transformers");


}