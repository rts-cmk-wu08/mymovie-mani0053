
let popularHeader = function () {
    let element = document.createElement("header")
    element.classList.add("pheader");

    element.innerHTML = `
    <h2>Popular</h2>
    <a class="more" href ="#">See more</a>
    `

    return element;

}
export default popularHeader;
