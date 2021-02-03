import './index.css';
import {
  Swiper,
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from 'swiper';
import Cookies from 'js-cookie';
import ShowAndHideBlock from '../components/ShowAndHideBlock';
import Modal from '../components/Modal';
import {
  dataForAnimationUDS,
  udsSelectors,
  introSliderData,
  reviewsSliderData,
} from '../utils/constants';
import {
  debounce,
} from '../utils/utils';

const page = document.querySelector('.page');

const reviews = Array.from(page.querySelectorAll('.reviews__slide'));

const aboutSilicon = page.querySelector('.about-silicon');

const mainNavList = page.querySelector('.main-nav__list');

const upButton = page.querySelector('.up-button');

const toggleMobileMenu = new ShowAndHideBlock('.header', '.toggle-menu');

const udsModal = new Modal(
  udsSelectors,
  page,
  dataForAnimationUDS,
);

const scrollTo = (position) => {
  window.scrollTo({ top: position, behavior: 'smooth' });
};

const showUpButton = (posToScroll) => {
  upButton.classList.add('up-button_visible');
  upButton.addEventListener('click', scrollTo);
};

const hideUpButton = (posToScroll) => {
  upButton.classList.remove('up-button_visible');
  upButton.removeEventListener('click', scrollTo);
};

reviews.forEach((review) => {
  const numberOfReviews = review.querySelector('.reviews__number-of-reviews');

  numberOfReviews.textContent = `(${reviews.length} ${reviews.length === 1 ? 'отзыв' : 'отзывов'})`;
});

toggleMobileMenu.enableBlockToggle();

Swiper.use([Navigation, Pagination, A11y, Autoplay]);

const introSlider = new Swiper('.intro__slider', introSliderData);

const reviewsSlider = new Swiper('.reviews__slider', reviewsSliderData);

mainNavList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('main-nav__link')) {
    evt.preventDefault();

    const target = document.querySelector(evt.target.hash);
    const position = target.getBoundingClientRect().top + window.pageYOffset;
    scrollTo(position);
  }
});

window.addEventListener('scroll', debounce(() => {
  const pos = window.pageYOffset;
  const targetPos = aboutSilicon.getBoundingClientRect().top + window.pageYOffset;

  if (pos > targetPos && !Cookies.get('date')) {
    Cookies.set('date', 'now');
    udsModal.open();
  }

  if (pos > targetPos) {
    showUpButton(0);
  } else {
    hideUpButton(0);
  }
}));

// const inTwoMinutes = new Date(new Date().getTime() + 2 * 60 * 1000);
// Cookies.set('date', 'now', { expires: inTwoMinutes });
