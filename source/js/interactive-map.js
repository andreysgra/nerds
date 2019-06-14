// Яндекс карта
/*eslint-disable*/
function init(ymaps) {
/*eslint-enable*/
  let map = new ymaps.Map('map', {
    center: [59.93944115603922, 30.32302403991186],
    zoom: 16,
    controls: ['zoomControl']
  });

  let placemark = new ymaps.Placemark(
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
}
