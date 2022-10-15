import Home from './Home.js';
import Menu from './Menu.js';

const site = document.querySelector('body');
const hometab = document.querySelector('.home-tab');
const menutab = document.querySelector('.menu-tab');
const contacttab = document.querySelector('.contact-tab');
const home = new Home;
const menu = new Menu;

hometab.classList.add('selected-tab');
home.renderHomePage();

site.addEventListener('click', (e) => {
  if (e.target.className === 'home-tab') {
    hometab.classList.add('selected-tab');
    menutab.classList.remove('selected-tab');
    contacttab.classList.remove('selected-tab');
    home.renderHomePage();
  } else if (e.target.className === 'menu-tab') {
    hometab.classList.remove('selected-tab');
    menutab.classList.add('selected-tab');
    contacttab.classList.remove('selected-tab');
    menu.renderMenuPage();
  } else if (e.target.className === 'contact-tab') {
    hometab.classList.remove('selected-tab');
    menutab.classList.remove('selected-tab');
    contacttab.classList.add('selected-tab');
  }
});