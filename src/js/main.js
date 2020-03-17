// // JavaScript Code
// document.addEventListener('DOMContentLoaded', (e) => {
//   const modal = document.querySelector('.modal');
//   const modalClose = modal.querySelector('.modal__close');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal');

//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   };

//   // Открытие модального окна.
//   modalBtn.forEach(btn => {
//     btn.addEventListener('click', switchModal);
//   });

//   // Закрытие модального окна при назатии на 'крестик'
//   modalClose.addEventListener('click', switchModal);

//   // Закрытие модального окна при нажатии клавиши Esc (keyCode = 27).
//   window.addEventListener('keydown', (e) => {
//     if (e.keyCode === 27 && modal.classList.contains('modal--visible')) {
//       switchModal();
//     }
//   });

//   // Закрытие модального окна при назатии мышью за пределами диалога.
//   modal.addEventListener('click', (e) => {
//     if (e.target.classList.contains('modal--visible')) {
//       switchModal();
//     }
//   });
// });

// jQuery Code
$(document).ready(() => {
  const modal = $('.modal');
  const modalClose = $('.modal__close');
  const modalBtn = $('[data-toggle=modal');

  // Открытие модального окна.
  modalBtn.on('click', () => {
    modal.addClass('modal--visible');
  });

  // Закрытие модального окна при назатии на 'крестик'
  modalClose.on('click', () =>{
    modal.removeClass('modal--visible');
  });

  // Закрытие модального окна при нажатии клавиши Esc (keyCode = 27).
  $(window).on('keydown', (e) => {
    if (e.keyCode === 27) {
      modal.removeClass('modal--visible');
    }
  });

  // Закрытие модального окна при назатии мышью за пределами диалога.
  modal.on('click', (e) => {
    if ($(e.target).hasClass('modal--visible')) {
      modal.removeClass('modal--visible');
    }
  });

  // Скрипт для кнопки "Наверх"
  // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  const topShow = 150;
  const delay = 1000; // Задержка прокрутки
  const topBtn = $('.top');

  $(window).on('scroll', () => { // При прокрутке попадаем в эту функцию
    /* В зависимости от положения полосы прокрукти и значения top_show, 
      скрываем или открываем кнопку "Наверх" */
    if ($(this).scrollTop() > topShow) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  // При клике по кнопке "Наверх" попадаем в эту функцию
  topBtn.on('click', () => {
    /* Плавная прокрутка наверх */
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });

  //initialize swiper when document ready
  const mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  const next = $('.swiper-button-next');
  const prev = $('.swiper-button-prev');
  const bullets = $('.swiper-pagination');

  bullets.css('left', prev.width() + 30);
  next.css('left', prev.width() + 30 + bullets.width() + 12);
});