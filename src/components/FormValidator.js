export default class FormValidator {
  constructor(formObj, form) {
    this._form = form;
    this._inactiveButtonClass = formObj.inactiveButtonClass;
    this._inputErrorClass = formObj.inputErrorClass;
    this._inputList = Array.from(this._form.querySelectorAll(formObj.inputSelector));
    this._submitButton = this._form.querySelector(formObj.submitButtonSelector);
  }

  _checkInputValidity() {
    this._inputList.forEach((inputElement) => {
      this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);
      if (!inputElement.validity.valid) {
        inputElement.classList.add(this._inputErrorClass);
        this._errorElement.textContent = inputElement.validationMessage;
      } else {
        inputElement.classList.remove(this._inputErrorClass);
        this._errorElement.textContent = '';
      }
    });
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  disableSubmitButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.setAttribute('disabled', true);
  }

  enableSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.removeAttribute('disabled');
  }

  _toggleSubmitButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  }

  hideErrors() {
    this._inputList.forEach((inputElement) => {
      this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);

      inputElement.classList.remove(this._inputErrorClass);
      this._errorElement.textContent = '';
    });
  }

  _setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity();
        this._toggleSubmitButtonState();
      });
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('focus', () => {
        this.hideErrors();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
