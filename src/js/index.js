"use strict";

(function() {
  // Форма обратной связи
  const contactsButton = document.getElementById("contacts-button");
  const formFeedback = document.querySelector(".form-feedback");

  if (contactsButton && formFeedback) {
    contactsButton.addEventListener("click", openFormFeedback);
    formFeedback.addEventListener("click", closeFormFeedback);
    window.addEventListener("keydown", closeFormFeedback);
  }

  function openFormFeedback(event) {
    event.preventDefault();
    formFeedback.classList.add("page__form-feedback--opened");
    formFeedback.classList.remove("page__form-feedback--closed");
  }

  function closeFormFeedback(event) {
    let element = event.target;

    if (
      element.classList.contains("form-feedback__close") ||
      event.keyCode === 27
    ) {
      event.preventDefault();
      formFeedback.classList.remove("page__form-feedback--opened");
      formFeedback.classList.add("page__form-feedback--closed");
    }
  }

  // Слайдер
  const sliderControls = document.querySelector(".slider__controls");
  let slides = Array.from(document.querySelectorAll(".slide"));
  let sliderButtons = Array.from(
    document.querySelectorAll(".slider__controls-button")
  );

  if (slides && sliderButtons && sliderControls) {
    sliderControls.addEventListener("click", changeSlide);
  }

  function findCurrentButton(element, index, array) {
    return element.classList.contains("slider__controls-button--current");
  }

  function findCurrentSlide(element, index, array) {
    return element.classList.contains("slide--visible");
  }

  function changeSlide(event) {
    let element = event.target;

    if (element.classList.contains("slider__controls-button")) {
      event.preventDefault();

      let indexNextButton = sliderButtons.indexOf(element);
      let indexCurrentButton = sliderButtons.indexOf(
        sliderButtons.find(findCurrentButton)
      );
      sliderButtons[indexCurrentButton].classList.remove(
        "slider__controls-button--current"
      );
      sliderButtons[indexNextButton].classList.add(
        "slider__controls-button--current"
      );

      let indexCurrentSlide = slides.indexOf(slides.find(findCurrentSlide));
      slides[indexCurrentSlide].classList.remove("slide--visible");
      slides[indexCurrentSlide].classList.add("slide--hidden");
      slides[indexNextButton].classList.add("slide--visible");
      slides[indexNextButton].classList.remove("slide--hidden");
    }
  }
})();

svg4everybody();

// Яндекс карта
function init(ymaps) {
  let map = new ymaps.Map("map", {
    center: [59.93944115603922, 30.32302403991186],
    zoom: 16,
    controls: ["zoomControl"]
  });

  let placemark = new ymaps.Placemark(
    [59.938633647616214, 30.32304549758399],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/map-marker.png",
      iconImageSize: [231, 190],
      iconImageOffset: [-51, -190]
    }
  );

  map.behaviors.disable("scrollZoom");
  map.geoObjects.add(placemark);
}
