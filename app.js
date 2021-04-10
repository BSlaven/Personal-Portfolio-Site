const showNavbar = document.querySelector('#show-navbar');
const navbar = document.querySelector('#navbar');
const container = document.querySelector('.container');
const toTopBtn = document.querySelector('#back-to-top');
const main = document.querySelector('#main');

window.onscroll = () => { scrollDocumentToTop() };

function scrollDocumentToTop() {
  if(document.scrollingElement.scrollTop > 200) {
    toTopBtn.style.visibility = 'visible';
  } else {
    toTopBtn.style.visibility = 'hidden';
  }
}

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

showNavbar.addEventListener('click', () => {
  navbar.classList.toggle('visible-navbar');
  showNavbar.classList.toggle('navbar-open');
});