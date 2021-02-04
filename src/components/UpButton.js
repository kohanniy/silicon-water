export default class UpButton {
  constructor(selector, handleUpButtonClick) {
    this._upButton = document.querySelector(selector);
    this._handleUpButtonClick = handleUpButtonClick;
  }

  show() {
    this._upButton.classList.add('up-button_visible');
    this._setEventListeners();
  }

  hide() {
    this._upButton.classList.remove('up-button_visible');
    this._removeEventListeners();
  }

  _setEventListeners() {
    this._upButton.addEventListener('click', this._handleUpButtonClick);
  }

  _removeEventListeners() {
    this._upButton.removeEventListener('click', this._handleUpButtonClick);
  }
}
