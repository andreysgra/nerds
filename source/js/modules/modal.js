export default class Modal {
  constructor(container, modalClassName = 'page__modal') {
    this._container = container;
    this._modalClassName = modalClassName;
    this._buttonClose = this._container.querySelector(`.${this._modalClassName}-button`);

    this._hide = this._hide.bind(this);
    this._show = this._show.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  _hide() {
    this._container.classList.remove(`${this._modalClassName}--visible`);
    this._container.classList.add(`${this._modalClassName}--hidden`);

    this._buttonClose.removeEventListener('click', this._hide);
    document.removeEventListener('keydown', this._onEscKeyDown);
  }

  _onEscKeyDown(evt) {
    const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

    if (isEscKey) {
      this._hide();
    }
  }

  _show() {
    this._container.classList.remove(`${this._modalClassName}--hidden`);
    this._container.classList.add(`${this._modalClassName}--visible`);

    this._buttonClose.addEventListener('click', this._hide);
    document.addEventListener('keydown', this._onEscKeyDown);
  }

  show() {
    this._show();
  }
}
