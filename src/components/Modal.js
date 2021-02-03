export default class Modal {
  constructor(selectors, page, dataForAnimation) {
    this._popup = document.querySelector(selectors.modal);
    this._popupContainer = this._popup.querySelector(selectors.modalContainer);
    this._closeButton = this._popup.querySelector(selectors.closeButton);
    this._page = page;
    this._dataForAnimation = dataForAnimation;
    this._keyframes = this._dataForAnimation.keyframes;
    this._options = this._dataForAnimation.options;
    // this._animate = this._popupContainer.animate(this._keyframes, this._options);
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  _startAnimate(direction, delay) {
    this._options.delay = delay;
    this._options.direction = direction;
    this._popupContainer.animate(this._keyframes, this._options);
  }

  open() {
    this._popup.classList.add('modal_opened');
    this._page.classList.add('page_lock');
    this._startAnimate('normal', 400);
    this._setEventListeners();
  }

  close() {
    this._startAnimate('reverse', 0);
    this._popupContainer.animate(this._keyframes, this._options).onfinish = () => {
      this._popup.classList.remove('modal_opened');
      this._page.classList.remove('page_lock');
    };
    this._removeEventListeners();
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target === this._popup) {
      this.close();
    }
  }

  _setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._handleOverlayClose);
    this._closeButton.addEventListener('click', this.close);
  }

  _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._handleOverlayClose);
    this._closeButton.removeEventListener('click', this.close);
  }
}
