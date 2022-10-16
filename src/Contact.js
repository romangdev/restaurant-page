export default class Contact {
  removeAllChildNodes = (content) => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  renderContactPage = () => {
    const content = document.querySelector('.content');
    this.removeAllChildNodes(content);
    content.classList.add('menu-content');
    const header = document.createElement('h1');
    header.classList.add('contact-header');
    header.innerText = 'Contact Us';

    const gmDiv = document.createElement('div');
    gmDiv.classList.add('gm-div');

    const gmName = document.createElement('p');
    gmName.innerText = 'Sheryll Jones (General Manager)';
    const gmNumber = document.createElement('p');
    gmNumber.innerText = '(123) 456 - 7890';
    const gmEmail = document.createElement('p');
    gmEmail.innerText = 'sjones@silvercafe.wow';
    gmEmail.classList.add('final-p-contact');

    const gmImg = document.createElement('img');
    gmImg.src = './images/cafe-gm.jpg';
    gmImg.classList.add('gm-img');


    content.appendChild(header);
    content.appendChild(gmDiv);
    gmDiv.appendChild(gmName);
    gmDiv.appendChild(gmNumber);
    gmDiv.appendChild(gmEmail);
    content.appendChild(gmImg);
  }
}