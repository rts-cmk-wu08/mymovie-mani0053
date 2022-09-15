//SKRIVER/TILFØJER "api_key=" for at GØRE DET NEMMERE AT CONCANTENAT I API_URL
const API_KEY = "api_key=b2601cf496196721c371fdce348807c0";
const BASE_URL = "https://api.themoviedb.org/3";
//DENNE API_URL INDEHOLDER BASE_URL OG END POINT SOM ER FØR ? OG QUERY PARAMETER SOM ER EFTER ? FOR AT GÅ IGENNEM PARATMETEREN SKAL DER VÆRE ET & TEGN
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const main = document.querySelector('main');

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  main.innerHTML = '';
  data.forEach((movie) => {
    const { poster_path, title, vote_average } = movie;
    const movieEL = document.createElement("div");
    movieEL.classList.add("movie");
    movieEL.innerHTML = `
    <!-- <h2>Popular</h2> -->
    <div class="info">
    <img class="popularimg" src="${IMG_URL+poster_path}" alt="${title}">
    <h3 class="title">${title}</h3>
    <p><i class="fa-solid fa-star"></i> ${vote_average} /10 IMDb </p>

  </div>`
  main.append(movieEL);

  });
}
