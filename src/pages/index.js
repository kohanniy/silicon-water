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

import {
  dataForAnimationUDS,
  udsSelectors,
  introSliderData,
  reviewsSliderData,
  mainNavSelectors,
  pageSelector,
} from '../utils/constants';

import {
  debounce,
  scrollTo,
} from '../utils/utils';

Swiper.use([Navigation, Pagination, A11y, Autoplay]);

const reviews = Array.from(document.querySelectorAll('.reviews__slide'));

const aboutSilicon = document.querySelector('.about-silicon');

const upButton = new UpButton('.up-button', () => {
  scrollTo(0);
});

const mainNav = new MainNav(mainNavSelectors, scrollTo);

const udsModal = new Modal(
  udsSelectors,
  pageSelector,
  dataForAnimationUDS,
);

const introSlider = new Swiper('.intro__slider', introSliderData);

const reviewsSlider = new Swiper('.reviews__slider', reviewsSliderData);

reviews.forEach((review) => {
  const numberOfReviews = review.querySelector('.reviews__number-of-reviews');

  numberOfReviews.textContent = `(${reviews.length} ${reviews.length === 1 ? 'отзыв' : 'отзывов'})`;
});

mainNav.enable();

window.addEventListener('scroll', debounce(() => {
  const pos = window.pageYOffset;
  const targetPos = aboutSilicon.getBoundingClientRect().top + window.pageYOffset;

  if (pos > targetPos && !Cookies.get('date')) {
    Cookies.set('date', 'now');
    udsModal.open();
  }

  if (pos > targetPos) {
    upButton.show();
  } else {
    upButton.hide();
  }
}));

// const inTwoMinutes = new Date(new Date().getTime() + 2 * 60 * 1000);
// Cookies.set('date', 'now', { expires: inTwoMinutes });
