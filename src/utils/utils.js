const DEBOUNCE_INTERVAL = 300;

export const debounce = (callback, wait = DEBOUNCE_INTERVAL) => {
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), wait);
  };
};

export const scrollTo = (position) => {
  window.scrollTo({ top: position, behavior: 'smooth' });
};
