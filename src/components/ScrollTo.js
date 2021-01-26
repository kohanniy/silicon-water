export default class ScrollTo {
  constructor(menuSelector, menuLinkSelector) {
    this._menu = document.querySelector(menuSelector);
    this._menuLinkSelector = menuLinkSelector;
    this._scrollToTarget = this._scrollToTarget.bind(this);
  }

  _scrollToTarget(evt) {
    if (evt.target.classList.contains(this._menuLinkSelector)) {
      evt.preventDefault();

      const target = document.querySelector(evt.target.hash);
      const position = target.getBoundingClientRect().top + pageYOffset;
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }
  }

  _setEventListeners() {
    this._menu.addEventListener('click', (evt) => {
      this._scrollToTarget(evt);
    });
  }

  enableScrollTo() {
    this._setEventListeners();
  }
}
