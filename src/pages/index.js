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
} from '../utils/constants';
import {
  debounce,
} from '../utils/utils';

const page = document.querySelector('.page');

const reviews = Array.from(document.querySelectorAll('.reviews__slide'));

const aboutSilicon = document.querySelector('.about-silicon');

const mainNavList = document.querySelector('.main-nav__list');

const upButton = document.querySelector('.up-button');

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

const introSlider = new Swiper('.intro__slider', {
  effect: 'slide',
  speed: 500,
  watchOverflow: true,
  centerSlides: true,
  centerSlidesBounds: true,
  grabCursor: false,
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  containerModifierClass: 'intro__slider-',
  slideClass: 'intro__slide',
  wrapperClass: 'intro__slider-wrap',
  roundLengths: true,
  pagination: {
    el: '.intro__slider-dots',
    type: 'bullets',
    bulletElement: 'li',
    clickable: true,
    bulletClass: 'intro__slider-dot',
    bulletActiveClass: 'intro__slider-dot_active',
    modifierClass: 'intro__slider-dots-',
  },
  autoplay: {
    delay: 4000,
  },
  a11y: {
    firstSlideMessage: 'Первый слайд',
    lastSlideMessage: 'Последний слайд',
    paginationBulletMessage: 'Перейти к {{index}} слайду',
  },
});

const reviewsSlider = new Swiper('.reviews__slider', {
  effect: 'slide',
  speed: 500,
  watchOverflow: true,
  centerSlides: true,
  centerSlidesBounds: true,
  grabCursor: false,
  centeredSlides: true,
  spaceBetween: 10,
  containerModifierClass: 'reviews__slider-',
  slideClass: 'reviews__slide',
  wrapperClass: 'reviews__slider-wrap',
  roundLengths: true,
  navigation: {
    nextEl: '.reviews__slider-btn_type_next',
    prevEl: '.reviews__slider-btn_type_prev',
    disabledClass: 'reviews__slider-btn_disabled',
  },
  autoplay: {
    delay: 4000,
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Первый слайд',
    lastSlideMessage: 'Последний слайд',
  },
});

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
