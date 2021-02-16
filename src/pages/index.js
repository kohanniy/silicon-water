import './index.css';

import {
  Swiper,
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from 'swiper';

import Cookies from 'js-cookie';

import Modal from '../components/Modal';

import UpButton from '../components/UpButton';

import MainNav from '../components/MainNav';

import Catalog from '../components/Catalog';

import ModalWithArticle from '../components/ModalWithArticle';

import LazyLoadMap from '../components/LazyLoadMap';

import AnimElWhenScrolling from '../components/AnimElWhenScrolling';

import {
  dataForAnimationUDS,
  introSliderData,
  reviewsSliderData,
  mainNavSelectors,
  pageSelector,
  articles,
  catalogSelectors,
  modalUdsSelector,
  modalArticleSelector,
  articleSelectors,
  dataForAnimationArticle,
  mapSelectors,
  animItemsSelector,
} from '../utils/constants';

import {
  debounce,
  scrollTo,
  offset,
} from '../utils/utils';

window.addEventListener('load', () => {
  const reviews = Array.from(document.querySelectorAll('.reviews__slide'));

  const water = document.querySelector('.water');

  const contactsLogo = document.querySelector('.contacts__logo');

  const copyrightName = document.querySelector('.copyright__name');

  const upButton = new UpButton('.up-button', () => {
    scrollTo(0);
  });

  const mainNav = new MainNav(mainNavSelectors, scrollTo);

  const udsModal = new Modal(
    modalUdsSelector,
    pageSelector,
    dataForAnimationUDS,
  );

  const modalWithArticle = new ModalWithArticle(
    modalArticleSelector,
    pageSelector,
    dataForAnimationArticle,
    articles,
    articleSelectors,
  );

  const catalog = new Catalog(
    catalogSelectors,
    articles,
    {
      handleMoreButtonClick: (dataset) => {
        modalWithArticle.open(dataset);
      },
    },
  );

  const lazyMap = new LazyLoadMap(mapSelectors);

  const animItems = new AnimElWhenScrolling(
    animItemsSelector,
  );

  Swiper.use([Navigation, Pagination, A11y, Autoplay]);

  const introSlider = new Swiper('.intro__slider', introSliderData);

  const reviewsSlider = new Swiper('.reviews__slider', reviewsSliderData);

  reviews.forEach((review) => {
    const numberOfReviews = review.querySelector('.reviews__number-of-reviews');

    numberOfReviews.textContent = `(${reviews.length} ${reviews.length === 1 ? 'отзыв' : 'отзывов'})`;
  });

  animItems.animOnScroll();

  mainNav.enable();

  catalog.enable();

  lazyMap.enable();

  contactsLogo.addEventListener('click', () => {
    scrollTo(0);
  });

  copyrightName.addEventListener('click', () => {
    scrollTo(0);
  });

  window.addEventListener('scroll', () => {
    const pos = window.pageYOffset;
    const targetPos = offset(water);

    animItems.animOnScroll();

    if (pos > targetPos && !Cookies.get('date')) {
      Cookies.set('date', 'now');
      udsModal.open();
    }

    if (pos > targetPos) {
      upButton.show();
    } else {
      upButton.hide();
    }
  });
});

// const inTwoMinutes = new Date(new Date().getTime() + 2 * 60 * 1000);
// Cookies.set('date', 'now', { expires: inTwoMinutes });
