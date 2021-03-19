const showNavbar = document.querySelector('#show-navbar');
const navbar = document.querySelector('#navbar');
const container = document.querySelector('.container');
const toTopBtn = document.querySelector('#back-to-top');
const main = document.querySelector('#main');

// document.addEventListener('scroll', scrollDocumentToTop);
// window.onscroll = function() {scrollDocumentToTop()};


function scrollDocumentToTop() {

  // if(document.body.scrollTop > 100) {
  //   toTopBtn.style.display = 'block';
  // } else {
  //   toTopBtn.style.display = 'none'
  // }
  console.log(document.scrollingElement.scrollTop);
}

toTopBtn.addEventListener('click', () => {
  console.log('Slaven ide na vrh');
})



showNavbar.addEventListener('click', () => {
  navbar.classList.toggle('visible-navbar');
  showNavbar.classList.toggle('navbar-open');
});