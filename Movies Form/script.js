class Movie{
    constructor(movie_show,title,director,year,sequels){
        this.movie_show=movie_show;
        this.title=title;
        this.director=director;
        this.year=year;
        this.sequels=sequels;
    }
}
const default_movie=[
    {
        movie_show: "movie",
        title: "The Breadwinner",
        director: "Nora Twomey",
        year: "2017",
        sequels:"no",
    },
    {
        movie_show: "show",
        title: "Young Sheldon",
        director: "Jon Favreau",
        year: "2017",
        sequels:"yes",
    },
    {
        movie_show: "movie",
        title: "Micheal",
        director: "Antion Fuqua",
        year: "2026",
        sequels:"no",
    }
]

class UI{
    static addmovietolist=(movie)=>{
        const list=document.getElementById("movie-list");
        const row=document.createElement("tr")
        row.innerHTML="<td>${movie.movie_show}</td><td>${movie.title}</td><td>${movie.director}</td><td>${movie.year}</td><td>${movie.sequels}</td>"
        list.appendChild(row)
    }
    static displaymovies=()=>{
        default_movie.forEach(movie => UI.addmovietolist(movie)
            
        );
    }
    
}



UI.displaymovies()
documents.querySelector("#movie-form").addEventListener("submit",addamovie)
function addamovie(e){
    e.preventDefault()
    const ms=document.querySelector("#ms").value;
    const t=document.querySelector("#noms").value;
    const d=document.querySelector("#msd").value;
    const y=document.querySelector("#yor").value;
    const s=document.querySelector("#as").value;
    const movie=new Movie(ms, t, d, y, s)
    UI.addmovietolist(movie)
    
}
