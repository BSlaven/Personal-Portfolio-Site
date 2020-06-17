// const link = document.querySelector('.za_github');

const otvoriMeni = document.querySelector('#otvori-meni');
const navbar = document.querySelector('#navbar');
const lista = document.querySelector('#nav-list');
const header = document.querySelector('#header');

otvoriMeni.addEventListener('click', () => {
  lista.classList.toggle('prikaži-meni');
  header.classList.toggle('prikaži-meni');
});

