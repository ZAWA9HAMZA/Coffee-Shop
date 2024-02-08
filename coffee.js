
// coffee.js

document.getElementById('menu-icon').addEventListener('click', function() {
  var nav = document.querySelector('.nav-links');
  nav.style.display = (nav.style.display === 'block' ? 'none' : 'block');
});





window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById("scrollToTopBtn");
  
    // Affiche ou masque le bouton en fonction du défilement
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  
  // Lorsque le bouton est cliqué, faites défiler la page vers le haut
  document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  