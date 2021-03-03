import Modal from './Modal';

export default class ModalWithForm extends Modal {
  constructor(modalSelector, pageSelector, dataForAnimation, updateSlider, formObj) {
    super(modalSelector, pageSelector, dataForAnimation, updateSlider);
    this.form = this._modal.querySelector('.form');
    this.submitButton = this.form.querySelector(formObj.submitButtonSelector);
    this.isLoadingButton = this.form.querySelector(formObj.isLoading);
    this._formValues = {};
  }

  _getInputValues() {
    this._inputList = this.form.querySelectorAll('.form__input');
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  _setEventListeners() {
    super._setEventListeners();
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }

  open(productName) {
    super.open();
    this._formValues.product = productName;
    return this._formValues;
  }

  _close() {
    super._close();
    this.form.reset();
  }
}
