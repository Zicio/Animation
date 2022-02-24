import DOM from './DOM';

export default class App {
  constructor(element) {
    this.element = element;
    this.DOM = new DOM(document);

    this.clickListener();
  }

  clickListener() {
    this.element.addEventListener('click', (e) => this.clickHandler(e));
  }

  clickHandler(e) {
    if (e.target.classList.contains('collapse__button')) {
      e.preventDefault();
      this.DOM.collapse(e.target);
    }
  }
}

const program = new App(document);
