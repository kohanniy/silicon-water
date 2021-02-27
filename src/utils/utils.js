export const scrollTo = (position) => {
  window.scrollTo({ top: position, behavior: 'smooth' });
};

export const offset = (el) => el.getBoundingClientRect().top + window.pageYOffset;
