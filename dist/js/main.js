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
  const projectsSwiper = new Swiper ('.projects__swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    }
  });

  const projectsNext = $('.projects__swiper-button-next');
  const projectsPrev = $('.projects__swiper-button-prev');
  const projectsBullets = $('.projects__swiper-pagination');

  projectsBullets.css('left', projectsPrev.width() + 30);
  projectsNext.css('left', projectsPrev.width() + 30 + projectsBullets.width() + 12);

  const counter = $('.steps__counter');

  const stepsSwiper = new Swiper ('.steps__swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
    pagination: {
      el: '.steps__swiper-pagination',
      type: 'bullets',
    },

    on: {
      slideChange: () => {
        counter.text(stepsSwiper.realIndex + 1 + '/6');
      }
    }
  });

  const stepsNext = $('.steps__swiper-button-next');
  const stepsPrev = $('.steps__swiper-button-prev');
  const stepsBullets = $('.steps__swiper-pagination');

  stepsBullets.css('left', stepsPrev.width() + 30);
  stepsNext.css('left', stepsPrev.width() + 30 + stepsBullets.width() + 12);

  new WOW().init();

  // Валидация формы
  $('.control__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required"
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Длина поля должна быть не менее 2 символов",
        maxlength: "Длина поля должна быть не больше 15 символов"
      },
      userPhone: "Заполните поле"
    },
    errorClass: "invalid",
    errorElement: "div",
    submitHandler: (form) => {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: (response) => {
          alert('Форма отправлена. Мы свяжемся с вами через 10 минут.');
          $(form)[0].reset();
        }
      });
    }
  });

  $('.footer__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Длина поля должна быть не менее 2 символов",
        maxlength: "Длина поля должна быть не больше 15 символов"
      },
      userPhone: "Заполните поле",
      userQuestion: {
        required: "Заполните поле",
        minlength: "Длина поля должна быть не менее 10 символов"
      }
    },
    errorClass: "invalid",
    errorElement: "div",
    submitHandler: (form) => {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: (response) => {
          alert('Форма отправлена. Мы свяжемся с вами через 10 минут.');
          $(form)[0].reset();
        }
      });
    }
  });

  $('.modal__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Длина поля должна быть не менее 2 символов",
        maxlength: "Длина поля должна быть не больше 15 символов"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    errorClass: "invalid",
    errorElement: "div",
    submitHandler: (form) => {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: (response) => {
          alert('Форма отправлена. Мы свяжемся с вами через 10 минут.');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });

  // Маска для номера телефона
  $('[type=tel]').mask('+7(000) 00-00-000', /*{ placeholder: "+7(___) __-__-___" }*/);

  // Карта
  // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    // ymaps.ready(init);
    // function init(){
    //   // Создание карты.
    //   const myMap = new ymaps.Map("map", {
    //     // Координаты центра карты.
    //     // Порядок по умолчанию: «широта, долгота».
    //     // Чтобы не определять координаты центра карты вручную,
    //     // воспользуйтесь инструментом Определение координат.
    //     center: [55.76, 37.64],
    //     // Уровень масштабирования. Допустимые значения:
    //     // от 0 (весь мир) до 19.
    //     zoom: 7
    //   });
    // }
});