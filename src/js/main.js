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
});