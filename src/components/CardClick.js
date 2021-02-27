export default class CardClick {
  constructor(cardSelectors, { handleCardClick }) {
    this._cardsContainer = document.querySelector(cardSelectors.container);
    this._buttonSelector = cardSelectors.button;
    this._hadleCardClick = handleCardClick;
  }

  _setEventListeners() {
    this._cardsContainer.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(this._buttonSelector)) {
        const productName = evt.target.parentNode.querySelector('.js-productName').textContent;
        this._hadleCardClick(productName);
      }
    });
  }

  enable() {
    this._setEventListeners();
  }
}
