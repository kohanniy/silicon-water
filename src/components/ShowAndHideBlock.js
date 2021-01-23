export default class ShowAndHideBlock {
  constructor(containerSelector, buttonSelector) {
    this._container = document.querySelector(containerSelector);
    this._toggleButton = this._container.querySelector(buttonSelector);
    // this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  _openBlock = () => {
    this._container.classList.add('opened');
  }

  _closeBlock = () => {
    this._container.classList.remove('opened');
  }

  _toggleBlock = () => {
    if (this._container.classList.contains('opened')) {
      this._closeBlock();
    } else {
      this._openBlock();
    }
  }

  _setEventListeners() {
    this._toggleButton.addEventListener('click', this._toggleBlock);
  }

  enableBlockToggle() {
    this._setEventListeners();
  }
}
