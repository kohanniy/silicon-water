import Modal from './Modal';

export default class ModalWithForm extends Modal {
  constructor(modalSelector, pageSelector, dataForAnimation, updateSlider) {
    super(modalSelector, pageSelector, dataForAnimation, updateSlider);
    this.form = this._modal.querySelector('.form');
  }

  _setEventListeners() {
    super._setEventListeners();
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }

  open(productName) {
    super.open();
    this.form.querySelector('.hide-title').value = productName;
    if (this.form.classList.contains('sent')) {
      this.form.classList.remove('sent');
      this.form.classList.add('init');
      this.form.dataset.status = 'init';
    }
  }

  _close() {
    super._close();
    this.form.reset();
  }
}
