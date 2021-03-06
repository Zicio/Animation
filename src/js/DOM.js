export default class DOM {
  constructor(element) {
    this.element = element;
    this.startHeight = document.querySelector('.collapse').offsetHeight;
  }

  collapse(target) {
    const box = document.querySelector('.collapse');
    const text = document.querySelector('.collapse__text');
    let boxHeight = box.offsetHeight;
    const textHeight = text.offsetHeight;
    const stepSize = 2;
    const max = boxHeight + textHeight;

    function plusStep() {
      boxHeight += stepSize;
      box.style.height = `${boxHeight}px`;
      if (boxHeight < max) {
        requestAnimationFrame(plusStep);
        return;
      }
      box.style.height = 'auto';
    }

    if (!target.classList.contains('active')) {
      requestAnimationFrame(plusStep);
      target.classList.add('active');
      return;
    }

    const { startHeight } = this;
    function minusStep() {
      boxHeight -= stepSize;
      box.style.height = `${boxHeight}px`;
      if (boxHeight > startHeight) {
        requestAnimationFrame(minusStep);
      }
    }
    requestAnimationFrame(minusStep);
    target.classList.remove('active');
  }
}
