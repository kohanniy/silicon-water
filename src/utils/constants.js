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
  wrapper: '.catalog__wrapper',
  button: '.catalog__button',
  article: '.catalog__article',
  title: '.catalog__heading',
  preview: '.catalog__text',
  icon: '.catalog__header-icon',
  more: '.catalog__order-button',
};

export const articles = {
  arthritis: {
    title: 'Артрит тра-та-та',
    preview: 'Velit ullamco nostrud reprehenderit velit laborum nulla ut exercitation.Non proident laborum ipsum anim consequat.Velit culpa amet reprehenderit qui.Proident duis sit fugiat laboris.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in varius tellus. Cras ac ullamcorper purus, non sagittis dolor. Nam sodales libero orci, sed vulputate nibh sodales vitae. Fusce pulvinar erat pellentesque nunc placerat, at ullamcorper leo faucibus. Fusce non ipsum commodo, fringilla nibh et, cursus dolor. Suspendisse potenti. Sed mi dui, laoreet non faucibus at, accumsan sit amet augue. Phasellus eleifend non ipsum mattis viverra. Aliquam eu sem ornare justo pretium condimentum. Vivamus euismod feugiat risus, in faucibus lorem lacinia eget. Nunc ut maximus nisi, et hendrerit mi. Etiam at ultrices odio.
    Sed id arcu ac leo tincidunt ullamcorper vel nec diam. Morbi tortor dolor, mattis consequat turpis nec, sodales finibus lacus. Donec rutrum, sem at tincidunt blandit, leo purus sodales massa, nec condimentum est justo vitae erat. Nunc sed hendrerit ante. Maecenas eleifend vestibulum magna in dignissim. Sed non metus eget nisi tempus sodales nec ut ex. Vivamus id gravida mi, eget ornare dui. Pellentesque eget aliquam tellus, sed fringilla nibh.
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur condimentum felis ut erat tempus, nec placerat mi venenatis. Etiam vel libero maximus, vulputate lacus in, eleifend ex. Etiam ornare faucibus dui ut laoreet. Sed sollicitudin blandit tincidunt. Maecenas maximus, tortor ac tempus lacinia, est massa consequat lectus, sit amet venenatis est urna non elit. Phasellus vehicula blandit arcu eu dignissim. Vivamus ac posuere nisi, sit amet luctus nulla. Curabitur sit amet nunc placerat, fermentum justo auctor, accumsan eros. Curabitur vel elit ac turpis dapibus ullamcorper.
    Proin semper at est quis dictum. Suspendisse lacinia ipsum nec euismod congue. Nunc at tellus pretium, pretium diam eu, aliquam neque. Nam in posuere turpis, non elementum quam. In a lacus leo. Maecenas sit amet tincidunt magna. Ut rhoncus malesuada ex, at dictum mi porttitor a. Sed viverra metus id libero luctus, vitae porttitor lacus molestie. Sed porttitor malesuada mauris, vel porttitor arcu dictum rutrum. Praesent hendrerit eros quis nulla consequat pretium. Donec quis consectetur erat. Cras id maximus mauris, a lobortis sem.`,
  },
  kidney: {
    title: 'Легкие тра-та-та',
    preview: 'In in veniam consequat aliquip id consectetur veniam aute voluptate.Consectetur exercitation velit amet fugiat nisi in id cupidatat dolore fugiat sint deserunt veniam sit.Et veniam labore Lorem irure Lorem tempor cupidatat eu ut id dolor consectetur consectetur.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus varius sapien quis pretium. Nam sem neque, dignissim vitae finibus non, malesuada lacinia felis. Pellentesque tempus viverra nibh non condimentum. Proin sollicitudin augue id ante pharetra tempor. Integer sed mi ligula. Integer nibh enim, euismod nec neque et, sagittis viverra nunc. Nullam vel pharetra nunc, at porta turpis. Aenean consectetur, eros ac ultrices bibendum, neque elit interdum nulla, et hendrerit urna turpis id libero. Morbi massa neque, tristique sit amet magna vitae, commodo blandit velit. Pellentesque vulputate tempus luctus. Integer molestie purus sapien, eget efficitur tellus feugiat et. Ut faucibus metus tellus, ac congue mi sollicitudin ac. Vestibulum consectetur vulputate purus, a euismod libero sollicitudin ac. Nam cursus nisi sit amet augue placerat, quis iaculis justo dapibus.
    Integer vulputate, nibh sit amet feugiat facilisis, magna tortor efficitur nibh, id tincidunt mi turpis et tellus. Proin at odio pretium, hendrerit tortor et, rhoncus est. Duis at malesuada odio. Morbi sagittis massa urna, sit amet efficitur velit vehicula eu. Nunc lacus ex, dictum at volutpat sit amet, aliquam sollicitudin nunc. Praesent id massa imperdiet, lacinia enim a, euismod lectus. Praesent dui erat, faucibus non velit a, cursus finibus est. Nullam ut venenatis mi, sed pretium erat. Maecenas sagittis facilisis sagittis.
    Ut tincidunt tellus tincidunt dui varius fermentum at id ligula. Vestibulum vitae mi sit amet ex cursus dignissim ut condimentum diam. Proin fermentum sem vitae ornare fringilla. Integer sollicitudin dictum laoreet. Nulla est ante, sodales eu blandit vitae, sodales a neque. Etiam condimentum iaculis magna vitae sollicitudin. Praesent scelerisque magna egestas felis sodales, tempor consequat felis congue. Curabitur quis interdum eros, dapibus molestie sem. Vivamus tristique non sem sit amet dictum. Nunc eu accumsan neque, ac hendrerit quam. Duis ipsum enim, fermentum a ante et, porttitor laoreet felis. Proin tincidunt quam sit amet dui dapibus commodo. In sodales aliquet pulvinar. Pellentesque lacus justo, luctus eget eleifend et, tincidunt in nibh. Duis hendrerit ullamcorper ipsum vel convallis.
    Duis ut ligula sit amet ante consequat commodo sed vitae dolor. Pellentesque metus mauris, consequat ut orci vel, accumsan euismod purus. Phasellus interdum risus massa, sit amet volutpat est pellentesque blandit. In tincidunt ultricies lobortis. Donec non leo sed lacus fringilla aliquam. Integer auctor justo sed nisl malesuada luctus. Ut dictum lobortis ipsum tempus cursus. Nunc blandit mauris eu ex egestas ullamcorper. Pellentesque turpis risus, interdum maximus viverra sit amet, varius vel ligula. Nullam et augue at purus condimentum sagittis at aliquam diam. Nullam cursus bibendum risus ac tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nunc tellus, tempus in vehicula at, convallis at purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam a tincidunt quam.
    Phasellus eget rutrum felis, eu volutpat metus. Duis et quam accumsan, pellentesque felis fringilla, pellentesque quam. Quisque vulputate viverra elit, tempus ornare purus ultricies et. Pellentesque scelerisque nec tortor in aliquam. Pellentesque efficitur eros eget placerat ultrices. Maecenas ut suscipit lacus, quis efficitur sem. Maecenas mauris ligula, elementum nec magna ut, vehicula imperdiet ex. Mauris non volutpat eros, sed placerat augue. Fusce tristique urna ac efficitur finibus.
    Pellentesque vel lacus ultricies, fringilla velit a, fermentum quam. Donec molestie tristique arcu, in blandit sem. Vestibulum venenatis urna ut porta hendrerit. Aliquam cursus eleifend hendrerit. Sed et hendrerit nunc. Ut maximus sapien non sapien semper, ac ultricies metus vehicula. Sed aliquet ac nulla non sodales. Morbi feugiat ligula ultricies tincidunt auctor.`,
  },
  liver: {
    title: 'Печень, печенка, печенюшка',
    preview: 'Veniam in proident et pariatur esse sint sint.Nulla aute consequat incididunt fugiat eiusmod consequat laboris aliqua quis ad sint voluptate.Ut duis est qui enim minim qui do laborum ut fugiat occaecat nostrud.',
    text: `Aliquam accumsan malesuada mattis. Curabitur sem lorem, pretium non rutrum quis, pharetra suscipit justo. Pellentesque aliquam urna id ante molestie placerat. Quisque et sem nisl. Nam suscipit in nulla ac pharetra. Aliquam erat volutpat. Aenean ultrices magna leo, sed scelerisque lacus finibus eu. Aliquam fermentum mauris quis quam malesuada, at congue tortor congue. Nunc lectus dui, lobortis eget odio nec, semper maximus erat. Suspendisse potenti. Fusce maximus magna in arcu ornare, in semper justo rhoncus. In ullamcorper vitae nibh ut auctor. Donec eu venenatis dolor. Curabitur laoreet sem lorem, nec interdum justo efficitur eu. Nam id tristique quam. Praesent id egestas metus.
    Donec ut felis gravida, commodo elit imperdiet, rhoncus tortor. Donec nec ante ex. Integer nisi sapien, venenatis eu lacinia ut, maximus sit amet quam. Nam tincidunt pulvinar est, vitae suscipit nisl. Suspendisse sit amet sem at enim ullamcorper feugiat ut non libero. Nullam malesuada volutpat hendrerit. Sed risus metus, molestie et fermentum vitae, consequat blandit tellus. Nulla in placerat sapien. Nullam nisi magna, luctus fermentum nisl vel, tempus mattis nisi. Phasellus id dignissim eros. Curabitur id vehicula nisi. Duis eu felis at est venenatis eleifend. Quisque id dui diam. Vivamus efficitur aliquam dapibus. Curabitur eu eros nulla. Sed facilisis dolor sit amet nulla volutpat, sit amet ultricies urna gravida.`,
  },
  stomach: {
    title: 'Язва желудка и двенадцатиперстной кишки',
    preview: 'Язвенная болезнь желудка – один из самых частых диагнозов ЖКТ. Она возникает вследствие нарушения кислотно-пептического баланса в верхних отделах пищеварительной системы. Нередко причиной язвы становятся неправильное питание, вредные привычки, стрессы. Еще один фактор возникновения заболевания – применение отдельных лекарств на постоянной основе. Сегодня триггерами язвы желудка и двенадцатиперстной кишки выступают ацетилсалициловая кислота, кофеин, кортикостероиды, противовоспалительные препараты на основе ибупрофена.',
    text: `Язвенная болезнь желудка – один из самых частых диагнозов ЖКТ. Она возникает вследствие нарушения кислотно-пептического баланса в верхних отделах пищеварительной системы. Нередко причиной язвы становятся неправильное питание, вредные привычки, стрессы. Еще один фактор возникновения заболевания – применение отдельных лекарств на постоянной основе. Сегодня триггерами язвы желудка и двенадцатиперстной кишки выступают ацетилсалициловая кислота, кофеин, кортикостероиды, противовоспалительные препараты на основе ибупрофена.
    Aliquam accumsan malesuada mattis. Curabitur sem lorem, pretium non rutrum quis, pharetra suscipit justo. Pellentesque aliquam urna id ante molestie placerat. Quisque et sem nisl. Nam suscipit in nulla ac pharetra. Aliquam erat volutpat. Aenean ultrices magna leo, sed scelerisque lacus finibus eu. Aliquam fermentum mauris quis quam malesuada, at congue tortor congue. Nunc lectus dui, lobortis eget odio nec, semper maximus erat. Suspendisse potenti. Fusce maximus magna in arcu ornare, in semper justo rhoncus. In ullamcorper vitae nibh ut auctor. Donec eu venenatis dolor. Curabitur laoreet sem lorem, nec interdum justo efficitur eu. Nam id tristique quam. Praesent id egestas metus.
    Donec ut felis gravida, commodo elit imperdiet, rhoncus tortor. Donec nec ante ex. Integer nisi sapien, venenatis eu lacinia ut, maximus sit amet quam. Nam tincidunt pulvinar est, vitae suscipit nisl. Suspendisse sit amet sem at enim ullamcorper feugiat ut non libero. Nullam malesuada volutpat hendrerit. Sed risus metus, molestie et fermentum vitae, consequat blandit tellus. Nulla in placerat sapien. Nullam nisi magna, luctus fermentum nisl vel, tempus mattis nisi. Phasellus id dignissim eros. Curabitur id vehicula nisi. Duis eu felis at est venenatis eleifend. Quisque id dui diam. Vivamus efficitur aliquam dapibus. Curabitur eu eros nulla. Sed facilisis dolor sit amet nulla volutpat, sit amet ultricies urna gravida.`,
  },
  allergy: {
    title: 'Кожная аллергия тра-та-та',
    preview: 'Do non ad dolor elit pariatur.Cillum minim laborum et culpa cillum anim incididunt ad cupidatat aliqua.Officia nulla do ad ipsum aliqua nulla incididunt dolore velit non.Minim do laborum occaecat velit nisi voluptate amet.Sunt reprehenderit eu id nulla cillum non duis aute veniam dolor id esse.Commodo culpa id Lorem exercitation ullamco.Aliqua id velit adipisicing ipsum aliquip do Lorem excepteur reprehenderit magna.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed sem libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla felis purus, porttitor nec laoreet eget, sodales et eros. Integer vestibulum gravida diam eu viverra. Aliquam commodo magna consectetur felis efficitur scelerisque. Donec vel nisi quis diam viverra porttitor nec et odio. Nulla facilisi. Aliquam erat volutpat.
    Nam ac consequat orci, bibendum finibus libero. Phasellus pulvinar, tortor id ullamcorper euismod, nunc neque congue ex, quis luctus justo orci vitae mauris. Aenean in arcu nunc. Vestibulum condimentum in mi ac facilisis. Sed ligula eros, ultrices tempus blandit in, imperdiet sit amet sem. Etiam consectetur mattis justo et condimentum. Fusce eu mi sed est tempor aliquam viverra eu magna. Sed varius metus id nisl tristique ullamcorper. Nunc in felis venenatis, cursus ligula id, aliquet nibh.
    Donec viverra massa a gravida tristique. Mauris sagittis ac mi eu scelerisque. Curabitur nisi nisl, ornare non ex at, tempus commodo mauris. Cras congue ligula in risus accumsan, vel viverra purus facilisis. Sed iaculis nunc ut felis mattis, a vulputate erat suscipit. Proin vitae mi vel erat mollis ullamcorper ut at turpis. Duis lobortis est id dui efficitur, aliquam lobortis urna eleifend. Sed bibendum mi semper ultricies varius. Nulla efficitur iaculis orci quis varius. Sed euismod magna ut nisi cursus auctor.
    Maecenas lorem purus, posuere ac pulvinar sit amet, vehicula id ante. Aliquam scelerisque egestas lorem sagittis mattis. In congue orci ac augue commodo, eu varius tortor interdum. Praesent vel leo vitae risus eleifend vehicula vitae sed ante. Aliquam vel velit id urna semper rutrum vitae in nisi. Nam erat metus, consectetur sed consequat a, posuere quis libero. Ut condimentum in nisi nec semper. Praesent venenatis arcu tellus, vitae egestas orci lacinia eget. Ut at orci at sem gravida facilisis. Donec et nibh mauris. Etiam id nisl libero. Praesent consequat felis nec rutrum placerat. Nam lacinia efficitur turpis eget fermentum. Vivamus rhoncus eros at purus faucibus, sed fringilla quam scelerisque. Morbi hendrerit feugiat elit in commodo.
    Nullam pharetra id felis non fringilla. Nullam finibus, lorem tincidunt mollis tincidunt, erat odio hendrerit mauris, et volutpat urna nisl lacinia diam. Proin neque neque, convallis eu accumsan vitae, aliquet nec odio. Sed nibh est, finibus eget ornare eget, maximus fringilla tortor. Proin vestibulum turpis auctor lorem egestas, quis facilisis ante congue. Fusce laoreet luctus faucibus. Suspendisse fringilla et turpis vitae ultricies. Nam vel nunc a massa mollis semper. Nullam interdum diam augue, et mattis leo pellentesque vitae. Vivamus molestie justo leo, id egestas ante dignissim eu. Pellentesque tincidunt eros non est venenatis, eget malesuada lectus finibus. Vivamus vestibulum urna dictum lectus blandit, sed tempor velit porta.`,
  },
};
