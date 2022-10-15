export default class Home {
  removeAllChildNodes = (content) => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  renderHomePage = () => {
    const content = document.querySelector('.content');
    content.classList.remove('menu-content');
    this.removeAllChildNodes(content);

    const header = document.createElement('h1');
    header.innerText = 'Silver Specialty Cafe';

    const pancakeImg = document.createElement('img');
    pancakeImg.setAttribute("src", "images/pancakes.jpg");
    pancakeImg.setAttribute("alt", "pancakes with fruit and whipped cream");
    pancakeImg.classList.add('pancake-img');

    const about = document.createElement('div');
    about.classList.add('about');

    const aboutPara = document.createElement('p');
    aboutPara.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed leo vitae ante porta euismod. Sed fermentum mi sem, eget dictum mi volutpat eget. Aliquam et accumsan sapien. Quisque euismod mi nec sollicitudin auctor. Pellentesque in fringilla tellus. Sed a nulla sit amet mi gravida placerat id in magna.";

    const aboutSig = document.createElement('p');
    aboutSig.innerText = "- Salvador Rhodes";

    const coffeeImg = document.createElement('img');
    coffeeImg.setAttribute("src", "images/woman_with_coffee.jpg");
    coffeeImg.setAttribute("alt", "woman drinking coffee and surfing laptop");
    coffeeImg.classList.add('coffee-drinker-img');

    const hours = document.createElement('div');
    hours.classList.add('hours');

    const hoursHeader = document.createElement('h2');
    hoursHeader.innerText = "Hours";

    const hoursList = document.createElement('p');
    hoursList.innerHTML = "Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Sunday: 8am - 10pm";

    const location = document.createElement('p');
    location.classList.add('location');
    location.innerText = "Located at: 123 Main St, New Haze, NY 101000";

    content.appendChild(header);
    content.appendChild(pancakeImg);
    content.appendChild(about);
    about.appendChild(aboutPara);
    about.appendChild(aboutSig);
    content.appendChild(coffeeImg);
    content.appendChild(hours);
    hours.appendChild(hoursHeader);
    hours.appendChild(hoursList);
    content.appendChild(location);
  
  }
}