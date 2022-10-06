//laver en function 
let header = function () {
  //laver en element header
  let element = document.createElement("header");
  //tilføjer en classlist og tager fat i variablen element
  element.classList.add("header");
  //laver innerHTML
  element.innerHTML = `
  <h1>MyMovies</h1>
  <!-- <button>switch</button> -->
  <div class="button">
    <input type="checkbox" class="checkbox" id="checkbox">
  <label for="checkbox" class="label">
    <div class='ball'></div>
  </label>
  </div>
  `
  //returnere elementet
  return element


}
//eksportere hele funktionen
export default header; 
