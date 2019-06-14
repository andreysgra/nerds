'use strict';
// Форма обратной связи
(function () {
  const contactsButton = document.getElementById('contacts-button');
  const formFeedback = document.querySelector('.form-feedback');

  if (contactsButton && formFeedback) {
    contactsButton.addEventListener('click', openFormFeedback);
    formFeedback.addEventListener('click', closeFormFeedback);
    window.addEventListener('keydown', closeFormFeedback);
  }

  function openFormFeedback(event) {
    event.preventDefault();
    formFeedback.classList.add('page__form-feedback--opened');
    formFeedback.classList.remove('page__form-feedback--closed');
  }

  function closeFormFeedback(event) {
    let element = event.target;

    if (
      element.classList.contains('form-feedback__close') ||
      event.keyCode === 27
    ) {
      event.preventDefault();
      formFeedback.classList.remove('page__form-feedback--opened');
      formFeedback.classList.add('page__form-feedback--closed');
    }
  }
})();
