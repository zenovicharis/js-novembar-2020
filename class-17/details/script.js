const url = "http://www.omdbapi.com/?"
const apiKey = "76c41ba5";

$(function() {
    console.log(window.location.href);

    // var urlObj = new URL(window.location.href);
    // var id = urlObj.searchParams.get("id");
    var id = window.localStorage.getItem("imdb-id");
    console.log(id);
    $.ajax({
        method: "GET",
        url: url + "apikey=" + apiKey + "&i=" + id 
     }).done(function(response) {
        displayMovie(new Movie(response));
     });
});

const displayMovie = function (movie) {
    var temp = $("div#template").clone();

    temp.find("img").attr("src", movie.img);
    temp.find("p.card-text").text(movie.year);
    temp.find("h5.card-title").text(movie.title);
    // temp.find("p.card-text").text(movie.year);
    // temp.find("a").attr("href", "details/index.html?id=" + movie.imdb);


    temp
        .removeClass("d-none")
        .attr("id", "");

    $("div.movies").append(temp);
    // console.log()
}

class Movie {
    constructor(response) {
        this.title = response.Title;
        this.year = response.Year;
        this.release = response.Released;
        this.genre = response.Genre.split(", ");
        this.director = response.Director;
        this.actors = response.Actors.split(", ");
        this.awards = response.Awards;
        this.img = response.Poster;
        this.imdbID = response.imdbID;
    }
}