document.addEventListener('DOMContentLoaded', (e) => {
  const modal = document.querySelector('.modal');
  const modalClose = modal.querySelector('.modal__close');
  const modalBtn = document.querySelectorAll('[data-toggle=modal');

  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(btn => {
    btn.addEventListener('click', switchModal);
  });

  modalClose.addEventListener('click', switchModal);

  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 && modal.classList.contains('modal--visible')) {
      switchModal();
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal--visible')) {
      switchModal();
    }
  });
});