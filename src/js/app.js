import DOM from './DOM';

export default class App {
  constructor(element) {
    this.element = element;

    this.clickListener();
  }

  clickListener() {
    this.element.addEventListener('click', (e) => this.constructor.clickHandler(e));
  }

  static clickHandler(e) {
    if (e.target.classList.contains('collapse__button')) {
      e.preventDefault();
      DOM.collapse(e.target);
    }
  }
}

const program = new App(document);
