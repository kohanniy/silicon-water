import Modal from './Modal';

export default class ModalWithArticle extends Modal {
  constructor(modalSelector, pageSelector, dataForAnimation, data, articleSelectors) {
    super(modalSelector, pageSelector, dataForAnimation);
    this._data = data;
    this._article = this._modalContainer.querySelector(articleSelectors.article);
    this._title = this._article.querySelector(articleSelectors.title);
    this._text = this._article.querySelector(articleSelectors.text);
  }

  _getArticleText(dataset) {
    const textArray = this._data[dataset.article].text.split('\n');
    this._result = [];

    textArray.forEach((item) => {
      const p = document.createElement('p');
      p.setAttribute('class', 'article__text');
      p.append(item);
      this._result.push(p);
    });

    return this._result;
  }

  _getArticleTitle(dataset) {
    const title = document.createElement('h2');
    title.setAttribute('class', 'article__title');
    title.append(this._data[dataset.article].title);
    return title;
  }

  _addContentToArticle(dataset) {
    this._article.prepend(this._getArticleTitle(dataset));
    this._article.append(...this._getArticleText(dataset));
  }

  _removeArticleContent() {
    Array.from(this._article.children).forEach((item) => {
      item.remove();
    });
  }

  open(dataset) {
    this._addContentToArticle(dataset);
    super.open();
  }

  _close() {
    super._close();
    let timer = setTimeout(() => this._removeArticleContent(), 1200);
    timer = null;
  }
}
