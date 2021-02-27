export default class Catalog {
  constructor(selectors, data, { handleMoreButtonClick }) {
    this._wrapper = document.querySelector(selectors.wrapper);
    this._buttonsContainer = this._wrapper.querySelector('.catalog__image-container');
    this._buttons = Array.from(this._wrapper.querySelectorAll(selectors.button));
    this._article = this._wrapper.querySelector(selectors.article);
    this._title = this._article.querySelector(selectors.title);
    this._icon = this._article.querySelector(selectors.icon);
    this._preview = this._article.querySelector(selectors.preview);
    this._moreButton = this._article.querySelector(selectors.more);
    this._data = data;
    this._handleMoreButtonClick = handleMoreButtonClick;
  }

  _renderArticle(button) {
    this._title.textContent = this._data[button.dataset.article].title;
    this._preview.textContent = this._data[button.dataset.article].preview;
    this._icon.src = button.dataset.src;
    this._icon.alt = button.dataset.alt;
    this._moreButton.dataset.article = button.dataset.article;
  }

  _switchActiveClass(button) {
    const activeButton = this._buttons.find((item) => item.classList.contains('catalog__button_active'));
    activeButton.classList.remove('catalog__button_active');
    button.classList.add('catalog__button_active');
  }

  _defaultRenderArticle() {
    this._renderArticle(this._buttons[0]);
    this._buttons[0].classList.add('catalog__button_active');
  }

  _smoothHideArticle() {
    const animateData = {
      keyframes: [
        { opacity: 1 },
        { opacity: 0 },
      ],
      options: {
        duration: 600,
        easing: 'ease-out',
        fill: 'both',
      },
    };

    this._icon.animate(animateData.keyframes, animateData.options);
    this._preview.animate(animateData.keyframes, animateData.options);
    this._moreButton.animate(animateData.keyframes, animateData.options);
    return this._title.animate(animateData.keyframes, animateData.options);
  }

  _smoothShowArticle() {
    const animateData = {
      keyframes: [
        { opacity: 0 },
        { opacity: 1 },
      ],
      options: {
        duration: 600,
        easing: 'ease-out',
        fill: 'both',
      },
    };

    this._title.animate(animateData.keyframes, animateData.options);
    this._icon.animate(animateData.keyframes, animateData.options);
    this._preview.animate(animateData.keyframes, animateData.options);
    this._moreButton.animate(animateData.keyframes, animateData.options);
  }

  _handleButtonClick(button) {
    if (!button.classList.contains('catalog__button_active')) {
      this._switchActiveClass(button);
      this._smoothHideArticle().addEventListener('finish', () => {
        this._icon.src = '';
        this._renderArticle(button);
        this._smoothShowArticle();
      });
    }
  }

  _setEventListeners() {
    this._buttons.forEach((button) => {
      button.addEventListener('click', () => {
        this._handleButtonClick(button);
      });
    });

    this._moreButton.addEventListener('click', () => {
      this._handleMoreButtonClick(this._moreButton.dataset);
    });
  }

  enable() {
    this._defaultRenderArticle();
    this._setEventListeners();
  }
}
