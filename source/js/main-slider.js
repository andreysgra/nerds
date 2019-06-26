'use strict';
// Слайдер
(function () {
  const sliderControls = document.querySelector('.slider__controls');
  let slides = Array.from(document.querySelectorAll('.slide'));
  let sliderButtons = Array.from(
    document.querySelectorAll('.slider__controls-button')
  );

  if (slides && sliderButtons && sliderControls) {
    sliderControls.addEventListener('click', changeSlide);
  }

  function findCurrentButton(element) {
    return element.classList.contains('slider__controls-button--current');
  }

  function findCurrentSlide(element) {
    return element.classList.contains('slide--visible');
  }

  function changeSlide(event) {
    let element = event.target;

    if (element.classList.contains('slider__controls-button')) {
      event.preventDefault();

      let indexNextButton = sliderButtons.indexOf(element);
      let indexCurrentButton = sliderButtons.indexOf(sliderButtons.find(findCurrentButton));

      sliderButtons[indexCurrentButton].classList.remove(
        'slider__controls-button--current'
      );
      sliderButtons[indexNextButton].classList.add(
        'slider__controls-button--current'
      );

      let indexCurrentSlide = slides.indexOf(slides.find(findCurrentSlide));

      slides[indexCurrentSlide].classList.remove('slide--visible');
      slides[indexCurrentSlide].classList.add('slide--hidden');
      slides[indexNextButton].classList.add('slide--visible');
      slides[indexNextButton].classList.remove('slide--hidden');
    }
  }
})();
