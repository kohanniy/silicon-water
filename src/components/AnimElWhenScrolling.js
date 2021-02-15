export default class AnimElWhenScrolling {
  constructor(selector) {
    this._animItems = document.querySelectorAll(selector);
  }

  animOnScroll() {
    this._animItems.forEach((item) => {
      const itemHeight = item.offsetHeight;
      const itemOffset = item.getBoundingClientRect().top + window.pageYOffset;
      const start = 4;
      const pos = window.pageYOffset;
      let itemPoint;

      if (window.innerHeight < itemHeight) {
        itemPoint = window.innerHeight - window.innerHeight / start;
      } else {
        itemPoint = window.innerHeight - itemHeight / start;
      }

      if ((pos > itemOffset - itemPoint) && pos < (itemOffset + itemHeight)) {
        item.classList.add('js-anim-active');
        item.classList.remove('js-anim');
      }
    });
  }
}
