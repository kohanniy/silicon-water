import './index.css';
import ShowAndHideBlock from '../components/ShowAndHideBlock.js';
import ScrollTo from '../components/ScrollTo.js';
import { Swiper, Navigation, Pagination, A11y, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, A11y, Autoplay]);

//мобильное меню
const toggleMobileMenu = new ShowAndHideBlock('.header', '.toggle-menu');

const scrollToBlock = new ScrollTo('.main-nav__list', 'main-nav__link');

toggleMobileMenu.enableBlockToggle();

scrollToBlock.enableScrollTo();

//Инициализация introSlider
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
  // navigation: {
  //   nextEl: '.intro__slider-btn_type_next',
  //   prevEl: '.intro__slider-btn_type_prev',
  // },
  pagination: {
    el: '.intro__slider-dots',
    type: 'bullets',
    bulletElement: 'li',
    clickable: true,
    bulletClass: 'intro__slider-dot',
    bulletActiveClass: 'intro__slider-dot_active',
    modifierClass: 'intro__slider-dots-'
  },
  autoplay: {
    delay: 4000,
  },
  a11y: {
    // prevSlideMessage: 'Предыдущий слайд',
    // nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Первый слайд',
    lastSlideMessage: 'Последний слайд',
    paginationBulletMessage: 'Перейти к {{index}} слайду'
  },
});


