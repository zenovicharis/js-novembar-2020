const url = "http://www.omdbapi.com/?"
const apiKey = "76c41ba5";


$(function() {
    $(document).on("keypress", "input#search", function(event) {
        console.log($(event.target).val());
    });

    $(document).on("click", "button#btn-search", function(event) {
        var searchTerm = $("input#search").val();
        searchMoviesByTerm(searchTerm);
        // console.log(arguments, "button");
    });

    $(document).on("click", "a#link", function(event) {
        event.preventDefault();
        window.localStorage.setItem("imdb-id", $(event.target).attr("data-id"));
        window.location.href = "details/index.html"
    });
});

const searchMoviesByTerm = function (search) {
    $.ajax({
       method: "GET",
       url: url + "apikey=" + apiKey + "&type=movie&s=" + search 
    }).done(function(response) {
        response.Search.forEach(movie => {
            displayMovie(new MovieShortDesc(movie));
        });
    });
}

const displayMovie = function (movie) {
    var temp = $("div#template").clone();

    temp.find("img").attr("src", movie.img);
    temp.find("h5.card-title").text(movie.title);
    temp.find("p.card-text").text(movie.year);
    // temp.find("a").attr("href", "details/index.html?id=" + movie.imdb);
    temp.find("a").attr("href", "");
    temp.find("a").attr("data-id", movie.imdb);


    temp
        .removeClass("d-none")
        .attr("id", "");

    $("div.movies").append(temp);
    // console.log()
}


class MovieShortDesc {
    constructor(response) {
        this.title = response.Title;
        this.year = response.Year;
        this.type = response.Type;
        this.img = response.Poster;
        this.imdb = response.imdbID;
    }
}


// {
//     "Title":"Mad Max",
//     "Year":"1979",
//     "Rated":"R",
//     "Released":"21 Mar 1980",
//     "Runtime":"88 min",
//     "Genre":"Action, Adventure, Sci-Fi, Thriller",
//     "Director":"George Miller",
//     "Writer":"James McCausland (screenplay), George Miller (screenplay), George Miller (original story), Byron Kennedy (original story)",
//     "Actors":"Mel Gibson, Joanne Samuel, Hugh Keays-Byrne, Steve Bisley",
//     "Plot":"In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.",
//     "Language":"English",
//     "Country":"Australia, USA",
//     "Awards":"5 wins & 7 nominations.",
//     "Poster":"https://m.media-amazon.com/images/M/MV5BMTM4Mjg5ODEzMV5BMl5BanBnXkFtZTcwMDc3NDk0NA@@._V1_SX300.jpg",
//     "Ratings":[
//        {
//           "Source":"Internet Movie Database",
//           "Value":"6.9/10"
//        },
//        {
//           "Source":"Rotten Tomatoes",
//           "Value":"90%"
//        },
//        {
//           "Source":"Metacritic",
//           "Value":"73/100"
//        }
//     ],
//     "Metascore":"73",
//     "imdbRating":"6.9",
//     "imdbVotes":"189,555",
//     "imdbID":"tt0079501",
//     "Type":"movie",
//     "DVD":"N/A",
//     "BoxOffice":"N/A",
//     "Production":"Kennedy Miller Productions, Mad Max Films, Crossroads",
//     "Website":"N/A",
//     "Response":"True"
//  }