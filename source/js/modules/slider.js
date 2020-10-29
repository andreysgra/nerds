export default class Slider {
  constructor(container, slideClassName, sliderControlsClassName) {
    this._container = container;
    this._slideClassName = slideClassName;
    this._sliderControlsClassName = sliderControlsClassName;
    this._controlsButtonClassName = `${this._sliderControlsClassName}__button`;
    this._slides = Array.from(this._container.querySelectorAll(`.${this._slideClassName}`));
    this._sliderControls = this._container.querySelector(`.${this._sliderControlsClassName}`);
    this._controlsButtons = Array.from(this._sliderControls.querySelectorAll(`.${this._controlsButtonClassName}`));
    this._currentControlsButton = null;
    this._nextControlsButton = null;
    this._currentSlide = null;
    this._nextSlide = null;

    this._findCurrentSlide = this._findCurrentSlide.bind(this);
    this._findCurrentButton = this._findCurrentButton.bind(this);
    this._onSliderControlsClick = this._onSliderControlsClick.bind(this);
  }

  _findCurrentButton(element) {
    return element.classList.contains(`${this._controlsButtonClassName}--current`);
  }

  _findCurrentSlide(element) {
    return element.classList.contains(`${this._slideClassName}--current`);
  }

  _onSliderControlsClick(evt) {
    const element = evt.target;

    if (element.classList.contains(this._controlsButtonClassName)) {
      evt.preventDefault();

      this._currentControlsButton = this._controlsButtons.find(this._findCurrentButton);
      this._nextControlsButton = element;

      this._currentControlsButton.classList.remove(`${this._controlsButtonClassName}--current`);
      this._nextControlsButton.classList.add(`${this._controlsButtonClassName}--current`);

      this._currentSlide = this._slides.find(this._findCurrentSlide);
      this._nextSlide = this._slides[this._controlsButtons.indexOf(this._nextControlsButton)];

      this._currentSlide.classList.remove(`${this._slideClassName}--current`);
      this._currentSlide.classList.add(`${this._slideClassName}--hidden`);
      this._nextSlide.classList.remove(`${this._slideClassName}--hidden`);
      this._nextSlide.classList.add(`${this._slideClassName}--current`);
    }
  }

  init() {
    this._sliderControls.addEventListener('click', this._onSliderControlsClick);
  }
}
