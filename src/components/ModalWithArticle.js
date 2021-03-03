import Modal from './Modal';

export default class ModalWithArticle extends Modal {
  constructor(
    modalSelector, pageSelector, dataForAnimation, updateSlider, articleSelectors,
  ) {
    super(modalSelector, pageSelector, dataForAnimation, updateSlider);
    this._article = this._modalContainer.querySelector(articleSelectors.article);
    this._title = this._article.querySelector(articleSelectors.title);
    this._text = this._article.querySelector(articleSelectors.text);
  }

  open(data) {
    super.open();
    this._title.textContent = data.title;
    this._text.innerHTML = data.text.split('\n').join('<br>');
  }
}
