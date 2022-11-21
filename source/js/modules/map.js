const mapContainer = document.querySelector('[data-map]');

let mapLoaded = true;

const loadMap = () => {
  if (mapLoaded) {
    mapLoaded = false;
    ymaps.ready(init);
  }
};

const initMap = () => {
  mapContainer.addEventListener('click', loadMap);
  mapContainer.addEventListener('mouseover', loadMap);
  mapContainer.addEventListener('touchstart', loadMap);
  mapContainer.addEventListener('touchmove', loadMap);
};

function init() {
  const map = new ymaps.Map('map', {
    once: true,
    passive: true,
    capture: true,
    center: [59.93868425386648, 30.3230366711649],
    zoom: 15,
  }, {
    autoFitToViewport: 'always',
  });

  const placemark = new ymaps.Placemark([59.93868425386648, 30.3230366711649], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/svg/pin.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-9, -22],
  });

  map.controls.remove('searchControl');
  map.controls.remove('geolocationControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');

  map.geoObjects.add(placemark);
}

export {initMap};
