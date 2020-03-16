document.addEventListener('DOMContentLoaded', (e) => {
  const modal = document.querySelector('.modal');
  const modalClose = modal.querySelector('.modal__close');
  const modalBtn = document.querySelectorAll('[data-toggle=modal');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(btn => {
    btn.addEventListener('click', switchModal);
  });

  modalClose.addEventListener('click', switchModal);
});