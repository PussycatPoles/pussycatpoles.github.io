
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", function() {
    navMenu.classList.toggle("active");
  });
});

document.querySelector(".hamburger").addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});
