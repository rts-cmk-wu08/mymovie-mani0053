import { genres } from "../genres.js";

let genreSpan = function(id){
    let currentGenre = genres.find((genre) => genre.id == id);
    //console.log(currentGenre);
    let element = document.createElement("span");
    element.classList.add("genre_pill");
    element.innerText = currentGenre.name;

    return element
}

export default genreSpan