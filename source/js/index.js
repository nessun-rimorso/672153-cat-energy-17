//= _polyfills/picture.js

var page = document.querySelector('.page');
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu__button');

function removeJsClass(el, className) {
  el.classList.remove(className);
}

function toggleMenu(el) {
  menuBtn.addEventListener('click', function () {
    el.classList.toggle('menu--open');
    if (el.classList.contains('menu--open')) {
      menuBtn.innerHTML = 'Закрыть'
    } else {
      menuBtn.innerHTML = 'Открыть'
    }
  })
}

function yandexMap() {
  ymaps.ready(init);
  function init(){
    var myMap;

    myMap = new ymaps.Map('map', {
      center: (screen.width < 1300) ? ([59.93877121663107, 30.323274149999975]) : ([59.939075, 30.32095]),
      zoom: 18,
      controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add("zoomControl", {
      position: {top: 100, right: 25}
    });

    var myPlacemark = new  ymaps.Placemark([59.93877121663107, 30.323274149999975] , {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin.png',
        iconImageSize: (screen.width > 767) ? [124, 106] : [62, 53],
        iconImageOffset: (screen.width > 767) ? [-62, -83] : [-31, -27.5]
      });
    myMap.geoObjects.add(myPlacemark);
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  removeJsClass(page, 'page__no-js');
  toggleMenu(menu);
  yandexMap();
});




