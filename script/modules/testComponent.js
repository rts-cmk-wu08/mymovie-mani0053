let testComponent  = function(){

let element = document.createElement('div')
element.classList.add('test')

element.innerHTML = `
    <h1>Hej med Dig</h1>
`

return element
}

export default testComponent