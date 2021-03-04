export const animItemsSelector = '.js-anim';

export const introCardSelectors = {
  container: '.intro__slider-wrap',
  button: 'order-button',
};

export const productionCardSelectors = {
  container: '.production__types',
  button: 'order-button',
};

export const mapSelectors = {
  container: '.contacts__map',
  map: '#ymapLazy',
};

export const dataForAnimationUDS = {
  keyframes: [
    {
      transform: 'translateX(-800px) rotate(-540deg)',
      opacity: 0,
    },
    {
      transform: 'translateX(0) rotate(0deg)',
      opacity: 1,
    },
  ],
  options: {
    duration: 600,
    easing: 'ease-out',
    fill: 'both',
  },
};

export const dataForAnimationForm = {
  keyframes: [
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
  ],
  options: {
    duration: 600,
    easing: 'ease-out',
    fill: 'both',
  },
};

export const dataForAnimationArticle = {
  keyframes: [
    {
      transform: 'scaleX(0)',
    },
    {
      transform: 'scaleX(1)',
    },
  ],
  options: {
    duration: 600,
    easing: 'ease-out',
    fill: 'both',
  },
};

export const modalUdsSelector = '.modal_type_uds';

export const modalArticleSelector = '.modal_type_article';

export const modalFormSelector = '.modal_type_form';

export const articleSelectors = {
  article: '.article',
  title: '.article__title',
  text: '.article__text',
};

export const introSliderData = {
  effect: 'slide',
  speed: 500,
  watchOverflow: true,
  centerSlides: true,
  centerSlidesBounds: true,
  grabCursor: false,
  centeredSlides: true,
  loop: true,
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
};

export const reviewsSliderData = {
  effect: 'slide',
  speed: 500,
  watchOverflow: true,
  centerSlides: true,
  centerSlidesBounds: true,
  grabCursor: false,
  centeredSlides: true,
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
};

export const mainNavSelectors = {
  header: '.header',
  navigation: '.main-nav__list',
  toggle: '.toggle-menu',
};

export const pageSelector = '.page';

export const catalogSelectors = {
  button: '.catalog__button',
  preview: '.preview',
};
