'use strict';

var gallery = document.querySelector('.gallery-overlay');
var galleryImg = gallery.querySelector('img');

var certificates = document.querySelector('.certificates');
var imgArr = certificates.querySelectorAll('img');


// закрытие галереи по 'Esc'
var closeOnKeydown = function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    hideGallery();
  }
}

var showGallery = function(evt) {
  gallery.classList.remove('hidden');
  galleryImg.src = evt.target.src;
  galleryImg.alt = evt.target.alt;
  window.addEventListener('keydown', closeOnKeydown);
}

var hideGallery = function() {
  gallery.classList.add('hidden');
  window.removeEventListener('keydown', closeOnKeydown);
}

// вешаем обработчик клика на изображения сертификатов
for (var i = 0; i < imgArr.length; i++) {
  imgArr[i].addEventListener('click', showGallery);
}

// вешаем обработчик клика на изображение галереи
galleryImg.addEventListener('click', hideGallery);
