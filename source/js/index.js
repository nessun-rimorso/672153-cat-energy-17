var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu__button');
var productLinksPicture = document.querySelectorAll('.product__link-picture');
var productLinks = document.querySelectorAll('.product__link');
var orderProductBtn = document.querySelectorAll('.product__button');

function removeJsClass(el, className) {
  el.classList.remove(className);
}

function openProductModal(links) {
  for (var i=0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
      event.preventDefault();
    })
  }
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
      center: (window.innerWidth >= 1300) ? ([59.938950, 30.31965]) : (window.innerWidth > 767 && window.innerWidth < 1300) ? ([59.93897121663107, 30.323274149999975]) : ([59.93870121663107, 30.323274149999975]),
      zoom: 17,
      controls: []
    },
      {
        autoFitToViewport: 'always'
      });

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add('zoomControl', {
      position: {top: 100, right: 25}
    });

    var myPlacemark = new ymaps.Placemark([59.93877121663107, 30.323274149999975] , {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin.png',
        iconImageSize: (window.innerWidth > 767) ? [124, 106] : [62, 53],
        iconImageOffset: (window.innerWidth > 767) ? [-62, -83] : [-31, -27.5]
      });
    myMap.geoObjects.add(myPlacemark);
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  removeJsClass(menuBtn, 'menu__button--no-js');
  toggleMenu(menu);
  yandexMap();
  if (productLinks && productLinksPicture && orderProductBtn) {
    openProductModal(productLinks);
    openProductModal(productLinksPicture);
    openProductModal(orderProductBtn);
  }
});
