/* CHANGE BG NAVBAR SCROLL */
document.addEventListener("DOMContentLoaded", function () {
  let bgcolor = document.querySelector(".bgcolor");

  window.onscroll = function () {
    let alternateBgcolor =
      (window.scrollY > 50 && !bgcolor.classList.contains("scrolled")) ||
      (window.scrollY == 0 && bgcolor.classList.contains("scrolled"));

    if (alternateBgcolor) {
      bgcolor.classList.toggle("scrolled");
    }
  };
});

/* CHANGE IMG NAVBAR SCROLL */

/* BOUTON SCROLL TO TOP */
let mybutton = document.getElementById("btn-back-to-top");

// montrer le bouton après 20px de scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// revenir en haut au clique sur le bouton
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
