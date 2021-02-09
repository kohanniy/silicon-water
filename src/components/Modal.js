export default class Modal {
  constructor(modalSelector, pageSelector, dataForAnimation) {
    this._page = document.querySelector(pageSelector);
    this._modal = this._page.querySelector(modalSelector);
    this._modalContainer = this._modal.querySelector('.modal__container');
    this._closeButton = this._modal.querySelector('.modal__close-button');
    this._keyframes = dataForAnimation.keyframes;
    this._options = dataForAnimation.options;

    this._close = this._close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  _startAnimate(direction, delay = 0) {
    this._options.delay = delay;
    this._options.direction = direction;
    return this._modalContainer.animate(this._keyframes, this._options);
  }

  open() {
    this._modal.classList.add('modal_opened');
    this._page.classList.add('page_lock');
    this._startAnimate('normal', 400);
    this._setEventListeners();
  }

  _close() {
    this._startAnimate('reverse', 0).addEventListener('finish', () => {
      this._modalContainer.scrollIntoView();
      this._modal.classList.remove('modal_opened');
      this._page.classList.remove('page_lock');
      this._removeEventListeners();
    });
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this._close();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target === this._modalContainer) {
      this._close();
    }
  }

  _setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._modal.addEventListener('click', this._handleOverlayClose);
    this._closeButton.addEventListener('click', this._close);
  }

  _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._modal.removeEventListener('click', this._handleOverlayClose);
    this._closeButton.removeEventListener('click', this._close);
  }
}
