export default class LazyLoadMap {
  constructor(selectors) {
    this._mapContainer = document.querySelector(selectors.container);
    this._map = this._mapContainer.querySelector(selectors.map);
    this._optionsMap = {
      once: true,
      passive: true,
      capture: true,
    };
    this._mapLoaded = false;

    this._startLazyLoadMap = this._startLazyLoadMap.bind(this);
  }

  _startLazyLoadMap() {
    if (!this._mapLoaded) {
      this._mapLoaded = true;
      this._map.setAttribute('src', this._map.getAttribute('data-src'));
      this._map.removeAttribute('data-src');
    }
  }

  _setEventListeners() {
    this._mapContainer.addEventListener('click', this._startLazyLoadMap, this._optionsMap);
    this._mapContainer.addEventListener('mouseover', this._startLazyLoadMap, this._optionsMap);
    this._mapContainer.addEventListener('touchstart', this._startLazyLoadMap, this._optionsMap);
    this._mapContainer.addEventListener('touchmove', this._startLazyLoadMap, this._optionsMap);
  }

  enable() {
    this._setEventListeners();
  }
}
