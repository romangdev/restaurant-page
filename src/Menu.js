export default class Menu {
  removeAllChildNodes = (content) => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  renderMenuPage = () => {
    const content = document.querySelector('.content');
    this.removeAllChildNodes(content);
  }
}