import Home from './Home.js';
import Menu from './Menu.js';

const site = document.querySelector('body');
const home = new Home;
const menu = new Menu;

home.renderHomePage();

site.addEventListener('click', (e) => {
  if (e.target.className === 'home-tab') {
    home.renderHomePage();
  } else if (e.target.className === 'menu-tab') {
    menu.renderMenuPage();
  } else if (e.target.className === 'contact-tab') {

  }
});