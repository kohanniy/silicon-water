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

export const udsSelectors = {
  modal: '.modal_type_uds',
  modalContainer: '.uds',
  closeButton: '.modal__close-button',
};
