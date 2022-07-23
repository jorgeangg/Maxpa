navbar = document.getElementById("barra");
barraScroll = navbar.offsetTop;
// Funcion para aggregar la clase fixed al navbar en caso que sobrepase el top de la pagina
function sticky() {
  if (window.scrollY > barraScroll) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}
window.onscroll = function () {
  sticky();
};
