document.addEventListener("DOMContentLoaded", () => {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  let movie_id = params.get("movie_id");

  console.log(id);
  // console.log("test" + movie_id);

  let apikey = "b2601cf496196721c371fdce348807c0";
  let baseURL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  //oprette html tags
  //wrapper
  let wrapperElm = document.querySelector(".wrapper");

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

  //header
  headerElm.innerHTML = `
  <div>
    <input type="checkbox" class="checkbox" id="checkbox">
  <label for="checkbox" class="label">
    <div class='ball'></div>
  </label>
</div>
    `;

  //footer
  /*footerElm.innerHTML = `
    <p class="footericon">
    <span><i class="fa-solid fa-film"></i></span>
    <span><i class="fa-solid fa-ticket"></i></span>
    <span><i class="fa-regular fa-bookmark"></i></span>
  </p>
    `;*/

  //about-movie

  function Convert(num) {
    h = Math.floor(num / 60);
    m = num % 60;
    return h + "h" + m + "min";
  }

  let aboutElm = document.createElement("section");
  aboutElm.classList.add("about");
  mainElm.append(aboutElm);

  let aboutMovies = document.createElement("div");
  aboutElm.append(aboutMovies);

  //(`baseURL/3/movie/${id}?api_key=(indsæt apikey lang nummer her)`)
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b2601cf496196721c371fdce348807c0`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let article = document.createElement("article");
      article.classList.add("about-article");
      article.innerHTML = `
      <div class="titlebook">
        <h3>${data.title}</h3>
        <i class="fa-regular fa-bookmark"></i>
    </div>
        <p class="ratenow"><i class="fa-solid fa-star"></i>${
          data.vote_average
        }/10 IMDb</p>
        <p class="genres"></p>
        <section class="sinfo">
          <div class="three"> 
            <p class="titlegrey">Length</p>
            <p class="infoblue">${Convert(data.runtime)}</p>
          </div>
          <div class="three">
            <p class="titlegrey">Language</p>
            <p class="infoblue">${data.spoken_languages[0].name}</p>
          </div>
          <div class="three">
          <p class="titlegrey">Year</p>
          <p class="infoblue">${data.release_date}</p>
          </div>
      </section>
  
  
  
        <h2>Description</h2>
        <p class="des">${data.overview}</p>
        <div class="castdes"> 
        <h2>Cast</h2>
        <a class="more" href ="#">See more</a>
        <div>
  
        `;
      aboutMovies.append(article);

      //movie time

      // genres blue pills
      let genreElm = article.querySelector(".genres");
      data.genres.forEach((genre) => {
        let genreSpan = document.createElement("span");
        genreSpan.classList.add("genre_pill");
        genreSpan.innerText = genre.name;
        genreElm.append(genreSpan);
      });

      //cast article

      //header cast
      // let castHeader = documnet.createElement("");
      // castHeader.innerHTML = `<h2>Cast</h2>`;
      // castElm.append(castHeader);

      let castElm = document.createElement("div");
      castElm.classList.add("cast");
      mainElm.append(castElm);

      fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b2601cf496196721c371fdce348807c0`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          data.cast.forEach((person, index) => {
            let div = document.createElement("div");
            div.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${person.profile_path}" alt="${person.original_name}"/>
            <p>${person.original_name}</p>
            
            `;
            if (index < 4) {
              castElm.append(div);
            }
          });
        });
    });
});
