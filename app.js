const showNavbar = document.querySelector('#show-navbar');
const navbar = document.querySelector('#navbar');
const container = document.querySelector('.container');

showNavbar.addEventListener('click', () => {
  navbar.classList.toggle('visible-navbar');
  showNavbar.classList.toggle('navbar-open');
});
