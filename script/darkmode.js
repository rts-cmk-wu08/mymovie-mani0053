document.addEventListener('DOMContentLoaded', function(){
    let setActiveStyleSheet = function(title){
        /*oprette en variabel og definere i backtags at man gerne vil kigge i link*/
        let css = `link[rel="alternate stylesheet"]`;
        let stylesheets = document.querySelectorAll(css);
        console.log(stylesheets)
        stylesheets.forEach(sheet => sheet.disabled = true);
        let selector = `link[title="${title}"]`;
        let activeSheet = document.querySelector(selector);
        activeSheet.disabled = false;
        localStorage.setItem("theme", title);
        
    }
    //gemmer den mode man trykkede på sidst
    let savedSheet = localStorage.getItem("theme");

    if(savedSheet){
        setActiveStyleSheet(savedSheet);
    }else {
        setActiveStyleSheet('light');
    }
    //setActiveStyleSheet('light');

    let lightBtnElm = document.querySelector('[data-mode="light"]');
    let darkBtnElm = document.querySelector('[data-mode="dark"]');
    
    lightBtnElm.addEventListener('click', function() {
        setActiveStyleSheet('light')
    });
    darkBtnElm.addEventListener('click', function() {
        setActiveStyleSheet('dark')
    });
    
})