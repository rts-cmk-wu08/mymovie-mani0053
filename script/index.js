document.addEventListener("DOMContentLoaded", () => {
  //console.log(genres)
  //SKRIVER/TILFØJER "api_key=" for at GØRE DET NEMMERE AT CONCANTENAT I API_URL
  let apikey = "b2601cf496196721c371fdce348807c0";
  let baseURL = "https://api.themoviedb.org/3";
  //DENNE API_URL INDEHOLDER BASE_URL OG END POINT SOM ER FØR ? OG QUERY PARAMETER SOM ER EFTER ? FOR AT GÅ IGENNEM PARATMETEREN SKAL DER VÆRE ET & TEGN
  /*const API_URL =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;*/
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  //wrapper
  let wrapperElm = document.querySelector(".wrapper");

  //icon div
  /*let iconElm = document.createElement("div");
  iconElm.classList.add("icon");
  wrapperElm.append(iconElm);*/

  //header
  let headerElm = document.createElement("header");
  headerElm.classList.add("header");
  wrapperElm.append(headerElm);

  //main
  let mainElm = document.createElement("main");
  wrapperElm.append(mainElm);

  //footer
  let footerElm = document.createElement("footer");
  wrapperElm.append(footerElm);

  //icon in header
  /*iconElm.innerHTML = `
  <p class="time">9:41</p>
  <p class="signal" ><i class="fa-sharp fa-solid fa-signal"></i><i class="fa-solid fa-wifi"></i><i class="fa-solid fa-battery-full"></i></p>
  `;*/

  //header
  headerElm.innerHTML = `
  <h1>MyMovies</h1>
  <!-- <button>switch</button> -->
<div class="button">
    <input type="checkbox" class="checkbox" id="checkbox">
  <label for="checkbox" class="label">
    <div class='ball'></div>
  </label>
</div>

  `;


  //footer
  footerElm.innerHTML = `
  <p class="footericon">
  <span><i class="fa-solid fa-film"></i></span>
  <span><i class="fa-solid fa-ticket"></i></span>
  <span><i class="fa-regular fa-bookmark"></i></span>
</p>

  `;

  //Now showing section
  let nowElm = document.createElement("section");
  nowElm.classList.add("now");
  mainElm.append(nowElm);

  // header in nowshowing section
  let nowHeader = document.createElement("header");
  nowHeader.classList.add("nheader");
  nowHeader.innerHTML = `<h2>Now showing</h2>
  <a class="more" href ="#">See more</a>`;
  nowElm.append(nowHeader);

  //div article now
  let nowMovies = document.createElement("div");
  nowMovies.classList.add("scrollside");
  nowElm.append(nowMovies);

  fetch(`${baseURL}/movie/now_playing?api_key=${apikey}`)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((movie) => {
        let article = document.createElement("article");
        article.classList.add("now-article");
        article.innerHTML = `
        <a class="nowlink" href="detail.html?id=${movie.id}">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster"/>
            <h3>${movie.title}</h3>
            <p class="ratenow"><i class="fa-solid fa-star"></i>${movie.vote_average}/10 IMDb</p>
    </a>
        `;
        nowMovies.append(article);
      });
    });

  // popular section

  let popularElm = document.createElement("section");
  popularElm.classList.add("popular");
  mainElm.append(popularElm);

  // header in popular section
  let popularHeader = document.createElement("header");
  popularHeader.classList.add("pheader");
  popularHeader.innerHTML = `
  <h2>Popular</h2>
  <a class="more" href ="#">See more</a>
  `;
  popularElm.append(popularHeader);

  // div article popular
  let popularMovies = document.createElement("div");
  popularElm.append(popularMovies);

  fetch(`${baseURL}/movie/popular?api_key=${apikey}`)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((movie) => {
        let article = document.createElement("article");
        article.classList.add("movie-article");
        article.innerHTML = ` 
        <a class="poplink" href="detail.html?id=${movie.id}">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster"/>
        <div class="infopop">
            <h3>${movie.title}</h3>
            <p class="ratepop"><i class="fa-solid fa-star"></i>   ${movie.vote_average}/10 IMDb</p>
            <p class="genres"></p>
      </a>
      </div>
        
        `;
        popularMovies.append(article);

        // genres blue pills
        let genreElm = article.querySelector(".genres");
        movie.genre_ids.forEach((id) => {
          let currentGenre = genres.find((genre) => genre.id == id);
          console.log(currentGenre);
          let genreSpan = document.createElement("span");
          genreSpan.classList.add("genre_pill");
          genreSpan.innerText = currentGenre.name;
          genreElm.append(genreSpan);
        });
      });
    });
});

/*
opretter en en wrapper i html fil hvor vi opretter de andre tags i js og append til wrapper som findes i html
skrive kommentar til linier
*/
