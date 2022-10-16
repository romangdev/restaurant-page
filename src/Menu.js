export default class Menu {
  removeAllChildNodes = (content) => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  renderMenuPage = () => {
    const content = document.querySelector('.content');
    content.classList.add('menu-content');
    this.removeAllChildNodes(content);

    const header = document.createElement('h1');
    header.innerText = 'Menu';

    const drinks = document.createElement('h2');
    drinks.innerText = 'Drinks';
    const coffeeDiv = document.createElement('div');
    const coffeeHeader = document.createElement('h3');
    coffeeHeader.innerText = 'Coffee';
    const coffeeDesc = document.createElement('p');
    coffeeDesc.innerText = "A nice, hot cup of black coffee."

    const mainDishes = document.createElement('h2');
    mainDishes.innerText = 'Main Dishes';
    const pancakesDiv = document.createElement('div');
    const pancakesHeader = document.createElement('h3');
    pancakesHeader.innerText = 'Pancakes';
    const pancakesDesc = document.createElement('p');
    pancakesDesc.innerText = "Sweet, fluffy pancakes topped with syrup.";
    const eggsBenedictDiv = document.createElement('div');
    const eggsBenedictHeader = document.createElement('h3');
    eggsBenedictHeader.innerText = 'Eggs Benedict';
    const eggsBenedictDesc = document.createElement('p');
    eggsBenedictDesc.innerText = "A world-class, juicy eggs benedict.";

    const sides = document.createElement('h2');
    sides.innerText = 'Sides';
    const hashbrownDiv = document.createElement('div');
    const hashbrownHeader = document.createElement('h3');
    hashbrownHeader.innerText = 'Hashbrowns';
    const hashbrownDesc = document.createElement('p');
    hashbrownDesc.innerText = "A golden, crunchy hashbrown."

    content.appendChild(header);

    content.appendChild(drinks);
    content.appendChild(coffeeDiv);
    coffeeDiv.appendChild(coffeeHeader);
    coffeeDiv.appendChild(coffeeDesc);

    content.appendChild(mainDishes);
    content.appendChild(pancakesDiv);
    pancakesDiv.appendChild(pancakesHeader);
    pancakesDiv.appendChild(pancakesDesc);
    content.appendChild(eggsBenedictDiv);
    eggsBenedictDiv.appendChild(eggsBenedictHeader);
    eggsBenedictDiv.appendChild(eggsBenedictDesc);

    content.appendChild(sides);
    content.appendChild(hashbrownDiv);
    hashbrownDiv.appendChild(hashbrownHeader);
    hashbrownDiv.appendChild(hashbrownDesc);
  }
}