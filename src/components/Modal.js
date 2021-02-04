export default class Modal {
  constructor(selectors, pageSelector, dataForAnimation) {
    this._page = document.querySelector(pageSelector);
    this._modal = this._page.querySelector(selectors.modal);
    this._modalContainer = this._modal.querySelector(selectors.modalContainer);
    this._closeButton = this._modal.querySelector(selectors.closeButton);
    this._keyframes = dataForAnimation.keyframes;
    this._options = dataForAnimation.options;

    this._close = this._close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  _startAnimate(direction, delay) {
    this._options.delay = delay;
    this._options.direction = direction;
    const animate = this._modalContainer.animate(this._keyframes, this._options);
    return animate;
  }

  open() {
    this._modal.classList.add('modal_opened');
    this._page.classList.add('page_lock');
    this._startAnimate('normal', 400);
    this._setEventListeners();
  }

  _close() {
    this._startAnimate('reverse', 0)
      .onfinish = () => {
        this._modal.classList.remove('modal_opened');
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
    if (evt.target === this._modal) {
      this.close();
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
