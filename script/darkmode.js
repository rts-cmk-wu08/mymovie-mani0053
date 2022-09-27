document.addEventListener("DOMContentLoaded", function () {
  let switchElm = document.querySelector(".checkbox");
  console.log(switchElm);
  //tager imod e (event objekt i browser)
  //functionalitet
  switchElm.addEventListener("click", function (e) {
    console.log(e.target.checked);
    if (e.target.checked) {
      setActiveStyleSheet("dark");
    } else {
      setActiveStyleSheet("light");
    }
  });

  let setActiveStyleSheet = function (title) {
    /*oprette en variabel og definere i backtags at man gerne vil kigge i link*/
    let css = `link[rel="alternate stylesheet"]`;
    let stylesheets = document.querySelectorAll(css);
    console.log(stylesheets);
    stylesheets.forEach((sheet) => (sheet.disabled = true));
    let selector = `link[title="${title}"]`;
    let activeSheet = document.querySelector(selector);
    activeSheet.disabled = false;
    localStorage.setItem("theme", title);
  };
  //gemmer den mode man trykkede på sidst
  let savedSheet = localStorage.getItem("theme");

  if (savedSheet) {
    //sætter switchen på den rigtige side af darkmode og forbliver på den
    if (savedSheet == "dark") {
      switchElm.checked = true;
    }

    setActiveStyleSheet(savedSheet);
  } else {
    setActiveStyleSheet("light");
  }
});
