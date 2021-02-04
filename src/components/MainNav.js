export default class Navigation {
  constructor(selectors, handleLinkClick) {
    this._header = document.querySelector(selectors.header);
    this._navigation = this._header.querySelector(selectors.navigation);
    this._toggleButton = this._header.querySelector(selectors.toggle);
    this._handleLinkClick = handleLinkClick;
    this._toggle = this._toggle.bind(this);
  }

  _show() {
    this._header.classList.add('opened');
  }

  _hide() {
    this._header.classList.remove('opened');
  }

  _toggle() {
    if (this._header.classList.contains('opened')) {
      this._hide();
    } else {
      this._show();
    }
  }

  _goToSection(el) {
    const target = document.querySelector(el.hash);
    const position = target.getBoundingClientRect().top + window.pageYOffset;
    this._handleLinkClick(position);
  }

  _setEventListeners() {
    this._toggleButton.addEventListener('click', this._toggle);

    this._navigation.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('main-nav__link')) {
        evt.preventDefault();
        this._goToSection(evt.target);
      }
    });
  }

  enable() {
    this._setEventListeners();
  }
}
