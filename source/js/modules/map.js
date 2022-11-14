const initMap = () => {
  function init() {
    const map = new ymaps.Map('map', {
      center: [59.93868425386648, 30.3230366711649],
      zoom: 15,
    }, {
      autoFitToViewport: 'always',
    });

    const placemark = new ymaps.Placemark([59.93868425386648, 30.3230366711649], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/svg/pin.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-9, -22],
    });

    map.geoObjects.add(placemark);
  }

  ymaps.ready(init);
};

export {initMap};
