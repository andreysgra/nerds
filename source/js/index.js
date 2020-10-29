import Slider from './modules/slider';
import Modal from './modules/modal';
import Map from './modules/map';
import { URL_MAP } from './const';

const sliderElement = document.querySelector('.slider');
const modalFormElement = document.querySelector('.modal-form');
const contactsButtonElement = document.querySelector('.contacts__button');
const mapId = document.querySelector('#map');

if (sliderElement) {
  new Slider(sliderElement, 'slider__list-item', 'slider-controls').init();
}

if (modalFormElement) {
  const modalForm = new Modal(modalFormElement);

  contactsButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    modalForm.show();
  });
}

if (mapId) {
  new Map('map', URL_MAP).init();
}
