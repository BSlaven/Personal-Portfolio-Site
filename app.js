const showNavbar = document.querySelector('#show-navbar');
const navbar = document.querySelector('#navbar');
const container = document.querySelector('.container');
const toTopBtn = document.querySelector('#back-to-top');
const main = document.querySelector('#main');
const listItems = document.querySelectorAll('#list-item');



window.onscroll = () => { scrollDocumentToTop() };

listItems.forEach(item => {
  item.addEventListener('click', e => {
    removeCurrenLinkMarking(listItems);
    item.classList.add('current');
  });
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

showNavbar.addEventListener('click', () => {
  navbar.classList.toggle('visible-navbar');
  showNavbar.classList.toggle('navbar-open');
});

function scrollDocumentToTop() {
  if(document.scrollingElement.scrollTop > 200) {
    toTopBtn.style.visibility = 'visible';
  } else {
    toTopBtn.style.visibility = 'hidden';
  }
}

function removeCurrenLinkMarking(items) {
  items.forEach(item => {
    item.classList.remove('current');
  });
}