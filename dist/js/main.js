// jQuery Code
$(document).ready(() => {
  const modal = $('.modal');
  const modalClose = $('.modal__close');
  const modalBtn = $('[data-toggle=modal');
  const thanks = $('.thanks');
  const thanksClose = $('.thanks__close');

  // Открытие модального окна.
  modalBtn.on('click', () => {
    modal.addClass('modal--visible');
  });

  // Закрытие модального окна при назатии на 'крестик'
  modalClose.on('click', () =>{
    modal.removeClass('modal--visible');
  });

  thanksClose.on('click', () =>{
    thanks.removeClass('thanks--visible');
  });

  // Закрытие модального окна при нажатии клавиши Esc (keyCode = 27).
  $(window).on('keydown', (e) => {
    if (e.keyCode === 27) {
      modal.removeClass('modal--visible');
      thanks.removeClass('thanks--visible');
    }
  });

  // Закрытие модального окна при назатии мышью за пределами диалога.
  modal.on('click', (e) => {
    if ($(e.target).hasClass('modal--visible')) {
      modal.removeClass('modal--visible');
    }
    if ($(e.target).hasClass('thanks--visible')) {
      thanks.removeClass('thanks--visible');
    }
  });

  thanks.on('click', (e) => {
    if ($(e.target).hasClass('thanks--visible')) {
      thanks.removeClass('thanks--visible');
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

  // плавное перемещение страницы к нужному блоку
	$(".nav__item, .logo__item").click(function () {
		let elementClick = $(this).attr("href");
		let destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1000);
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
          $(form)[0].reset();
          thanks.addClass('thanks--visible');
        }
      });
    }
  });

  $('#control-policy-checkbox').on('change', () => {
    if ($('.control__btn').attr('disabled') != 'disabled') {
      $('.control__btn').attr('disabled', true);
    } else {
      $('.control__btn').removeAttr('disabled');
    }
  });

  $('.control__btn').on('click', () => {
    gtag('event', 'ring-click', {
      'event_category': 'ring',
      'event_label': 'Обратный звонок'
    });
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
          $(form)[0].reset();
          thanks.addClass('thanks--visible');
        }
      });
    }
  });

  $('#footer-policy-checkbox').on('change', () => {
    if ($('.footer__btn').attr('disabled') != 'disabled') {
      $('.footer__btn').attr('disabled', true);
    } else {
      $('.footer__btn').removeAttr('disabled');
    }
  });

  $('.footer__btn').on('click', () => {
    gtag('event', 'ring-click', {
      'event_category': 'ring',
      'event_label': 'Обратный звонок'
    });
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
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          thanks.addClass('thanks--visible');
        }
      });
    }
  });

  $('#modal-policy-checkbox').on('change', () => {
    if ($('.modal__btn').attr('disabled') != 'disabled') {
      $('.modal__btn').attr('disabled', true);
    } else {
      $('.modal__btn').removeAttr('disabled');
    }
  });

  $('.modal__btn').on('click', () => {
    gtag('event', 'click', {
      'event_category': 'button',
      'event_label': 'Заявки'
    });
  });

  // Маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00'/*, { placeholder: "+7(___) __-__-___" }*/);

  let player;

  $('.video__play').on('click', () => {
    player = new YT.Player('player', {
      height: '434',
      width: '100%',
      videoId: '_aB6y1OdN0s',
      events: {
        'onReady': videoPlay
      }
    });
  });

  videoPlay = (e) => {
    e.target.playVideo();
  };

});