const page = document.querySelector('.page');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__button');

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

document.addEventListener("DOMContentLoaded", function(event) {
  removeJsClass(page, 'page__no-js');
  toggleMenu(menu);
});
