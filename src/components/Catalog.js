export default class Catalog {
  constructor(selectors, { handleMoreButtonClick }) {
    this._buttons = Array.from(document.querySelectorAll(selectors.button));
    this._previews = Array.from(document.querySelectorAll(selectors.preview));
    this._handleMoreButtonClick = handleMoreButtonClick;
    this._hideKeyFrames = [
      { opacity: 1 },
      { opacity: 0 },
    ];
    this._showKeyFrames = [
      { opacity: 0 },
      { opacity: 1 },
    ];
    this._options = {
      duration: 600,
      easing: 'ease-out',
      fill: 'both',
    };
  }

  _hidePreviewSmooth(preview) {
    return preview.animate(this._hideKeyFrames, this._options);
  }

  _showPreviewSmooth(preview) {
    preview.animate(this._showKeyFrames, this._options);
  }

  _addActiveClass(button) {
    const targetPreview = this._previews.find(
      (preview) => preview.dataset.relations === button.hash,
    );

    targetPreview.classList.add('preview_active');
    this._showPreviewSmooth(targetPreview);
  }

  _switchActiveClass(button) {
    const activeButton = this._buttons.find((btn) => btn.classList.contains('catalog__button_active'));
    const activePreview = this._previews.find((preview) => preview.classList.contains('preview_active'));

    activeButton.classList.remove('catalog__button_active');
    button.classList.add('catalog__button_active');

    this._hidePreviewSmooth(activePreview).addEventListener('finish', () => {
      activePreview.classList.remove('preview_active');
      this._addActiveClass(button);
    });
  }

  _setEventListeners() {
    this._buttons.forEach((button) => {
      button.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (!button.classList.contains('catalog__button_active')) {
          this._switchActiveClass(button);
        }
      });
    });

    this._previews.forEach((preview) => {
      const moreButton = preview.querySelector('.preview__order-button');

      moreButton.addEventListener('click', () => {
        const dataArticle = {
          title: preview.querySelector('.preview__title').textContent,
          text: preview.querySelector('.preview__content').textContent,
        };
        this._handleMoreButtonClick(dataArticle);
      });
    });
  }

  enable() {
    this._setEventListeners();
  }
}
