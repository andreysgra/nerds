"use strict";

svg4everybody();

(function() {
  // Форма обратной связи
  var contactsButton = document.getElementById("contacts-button");
  var formFeedback = document.querySelector(".form-feedback");

  if (contactsButton && formFeedback) {
    contactsButton.addEventListener("click", openFormFeedback);
    formFeedback.addEventListener("click", closeFormFeedback);
    window.addEventListener("keydown", closeFormFeedback);
  }

  function openFormFeedback(event) {
    var element = event.target;

    event.preventDefault();
    formFeedback.classList.add("page__form-feedback--opened");
  }

  function closeFormFeedback(event) {
    var element = event.target;

    if (
      element.classList.contains("form-feedback__close") ||
      event.keyCode === 27
    ) {
      event.preventDefault();
      formFeedback.classList.remove("page__form-feedback--opened");
    }
  }
})();

// Яндекс карта
function init(ymaps) {
  var map = new ymaps.Map("map", {
    center: [59.93944115603922, 30.32302403991186],
    zoom: 16,
    controls: ["zoomControl"]
  });

  var placemark = new ymaps.Placemark(
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
