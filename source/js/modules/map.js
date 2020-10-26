export default class Map {
  constructor(mapId, scriptSrc) {
    this._mapId = mapId;
    this._scriptSrc = scriptSrc;

    this._loadScript = this._loadScript.bind(this);
    this._initMap = this._initMap.bind(this);
  }

  _initMap(ymaps) {
    const map = new ymaps.Map('map', {
      center: [59.93944115603922, 30.32302403991186],
      zoom: 16,
      controls: ['zoomControl']
    });

    const placemark = new ymaps.Placemark(
      [59.938633647616214, 30.32304549758399],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [231, 190],
        iconImageOffset: [-51, -190]
      }
    );

    map.behaviors.disable('scrollZoom');
    map.geoObjects.add(placemark);

    return map;
  }

  _loadScript() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');

      script.onload = resolve;
      script.onerror = reject;
      script.src = this._scriptSrc;

      document.body.appendChild(script);
    })
      .then(() => {
        /*eslint-disable*/
        ymaps.ready(this._initMap);
        /*eslint-enable*/
      })
    ;
  }

  init() {
    this._loadScript();
  }
}
