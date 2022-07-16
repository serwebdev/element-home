(function () {
  const headerBurger = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const headerMain = document.querySelector('.header-main');

  headerBurger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    if (mobileMenu.classList.contains('show')) {
      headerMain.classList.add('show');
      headerBurger.classList.add('close');
      document.body.style.overflow = 'hidden';
    } else {
      headerMain.classList.remove('show');
      headerBurger.classList.remove('close');
      document.body.style.overflow = '';
    }
  });
})();

// Маска телефона
(function () {
  let inputsTel = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputsTel);
})();

// Валидация формы
(function () {
  const designerForm = document.querySelector('.designer__form');
  const designerInput = document.querySelectorAll('.designer__input');
  const designerInputEmail = document.querySelector('.designer__input-email');
  const designerInputPhone = document.querySelector('.designer__input-phone');

  // Если форма на странице есть
  if (designerForm) {
    designerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Пустым инпутам добавляем класс error
      designerInput.forEach(input => {
        addClassError(input, input.value);
      });
      validEmail();
    });

    designerInputEmail.addEventListener('input', function () {
      validEmail();
    });

    // Проверяет на валидность поле email
    function validEmail() {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      addClassError(designerInputEmail, reg.test(designerInputEmail.value));
    }

    // Функция добавляет инпутам класс error, если value равно false
    function addClassError(input, value) {
      if (!value) {
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    }
  }
})();

// Modal =========================================================================
(function () {
  const selectorCard = '.reviews__card';
  // const openModal = document.querySelectorAll('.reviews__cardText');
  const openModal = document.querySelectorAll(selectorCard);
  const reviewsContent = document.querySelector('.reviews__content');
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.modal__btn');
  const modalContent = document.querySelector('.modal__content');
  const modalReviewsModal = document.querySelectorAll('.modal-reviews__modal');

  let clientWidth = document.documentElement.clientWidth;

  // Возвращаем прокрутку и убираем padding-right
  function scrollShow() {
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';
  }
  console.log(
    openModal.length,
    document.querySelectorAll('.reviews__slider-slide').length
  );

  // Открытие модального окна
  if (reviewsContent) {
    reviewsContent.addEventListener('click', function (e) {
      if (e.target.closest(selectorCard)) {
        modal.classList.add('open');

        renderCardModal(e.target.closest(selectorCard));

        // Убираем прокрутку с body и добавляем padding-right
        document.body.style.overflowY = 'hidden';
        let scrollWidth = document.documentElement.clientWidth - clientWidth;
        document.body.style.paddingRight = `${scrollWidth}px`;
      }
    });
  }

  // Закрытие модального окна по нажатию на крестик
  closeModal.addEventListener('click', function () {
    modal.classList.remove('open');

    scrollShow();
  });

  // Закрытие модального окна по клику вне окна
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('open');

      scrollShow();
    }
  });

  // Закрытие по нажатию клавиши Esc
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      modal.classList.remove('open');

      scrollShow();
    }
    console.log(e.key, e.code);
  });

  // Выводит нужную карточку в модальном окне
  function renderCardModal(selectorCard) {
    const indModalCard = +selectorCard.dataset.numberCard - 1;
    console.log(selectorCard, indModalCard);

    modalReviewsModal.forEach(item => {
      item.classList.remove('show');
    });

    modalReviewsModal[indModalCard].classList.add('show');

    openVideo(modalReviewsModal[indModalCard]);
  }

  // Открывает видео
  function openVideo(currentCardModal) {
    const videoPlay = currentCardModal.querySelector(
      '.modal-reviews__modalVideo-play'
    );
    const modalVideoImgWrap = currentCardModal.querySelector(
      '.modal-reviews__modalVideo-img-wrap'
    );
    const modalVideoVideoWrap = currentCardModal.querySelector(
      '.modal-reviews__modalVideo-video-wrap'
    );

    if (currentCardModal.querySelector('.modal-reviews__modalVideo-play')) {
      videoPlay.classList.remove('hide');
      modalVideoImgWrap.classList.remove('hide');
      modalVideoVideoWrap.classList.remove('show');

      videoPlay.addEventListener('click', () => {
        videoPlay.classList.add('hide');
        modalVideoImgWrap.classList.add('hide');
        modalVideoVideoWrap.classList.add('show');
      });
    } else {
      console.log('no');
    }

    // console.log(currentCardModal, videoPlay);
  }
})();

const swiper = new Swiper('.popular__slider', {
  // Optional parameters
  // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
  slidesPerView: 6.55,

  // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
  slidesPerGroup: 1,

  // Расстояние между слайдами в px
  spaceBetween: 40,

  // Скорость перелистывания
  speed: 300,

  //   Установите, true чтобы включить режим непрерывного цикла
  loop: true,

  // Брейкпоинты (точки останова)
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1.2,
    //   spaceBetween: 24,
    // },
    320: {
      slidesPerView: 1.37,
      spaceBetween: 24,
    },
    500: {
      slidesPerView: 2.3,
      spaceBetween: 24,
    },
    800: {
      slidesPerView: 3.5,
      spaceBetween: 24,
    },
    // // when window width is >= 480px
    1200: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1550: {
      slidesPerView: 5.55,
      spaceBetween: 40,
    },
    1850: {
      slidesPerView: 6.55,
      spaceBetween: 40,
    },
  },

  //   Индек начального слайда
  //   initialSlide: 0,

  // Добавить (в пикселях) дополнительное смещение слайда в конце контейнера (после всех слайдов)
  // slidesOffsetAfter: 100,

  // Добавить (в пикселях) дополнительное смещение слайда в начале контейнера (перед всеми слайдами)
  // slidesOffsetBefore: 100,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // Строка с типом разбиения на страницы. Может быть 'bullets', 'fraction' или 'progressbar' 'custom'
    // type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// reviews__slider ===========================================================
const swiper2 = new Swiper('.reviews__slider', {
  // Optional parameters
  // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
  slidesPerView: 6.55,

  // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
  slidesPerGroup: 1,

  // Расстояние между слайдами в px
  spaceBetween: 40,

  // Скорость перелистывания
  speed: 300,

  //   Установите, true чтобы включить режим непрерывного цикла
  loop: true,

  // Брейкпоинты (точки останова)
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      spaceBetween: 24,
    },
    450: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    900: {
      slidesPerView: 3.5,
      spaceBetween: 24,
    },
    1100: {
      slidesPerView: 4.5,
      spaceBetween: 24,
    },
    // // when window width is >= 480px
    1300: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1550: {
      slidesPerView: 5.5,
      spaceBetween: 40,
    },
    1800: {
      slidesPerView: 6.55,
      spaceBetween: 40,
    },
  },

  //   Индек начального слайда
  //   initialSlide: 0,

  // Добавить (в пикселях) дополнительное смещение слайда в конце контейнера (после всех слайдов)
  // slidesOffsetAfter: 100,

  // Добавить (в пикселях) дополнительное смещение слайда в начале контейнера (перед всеми слайдами)
  // slidesOffsetBefore: 100,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // Строка с типом разбиения на страницы. Может быть 'bullets', 'fraction' или 'progressbar' 'custom'
    // type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// production__slider ===========================================================
(function () {
  // const productionSlider = document.querySelector('.production__slider');
  // const productionSliderWrapper = document.querySelector(
  //   '.production__slider-wrapper'
  // );
  // const productionSliderItem = document.querySelectorAll(
  //   '.production__slider-item'
  // );

  const initSwiper3 = false;
  const mediaQuerySize = 900;

  const swiper3 = new Swiper('.production__slider', {
    // Optional parameters
    // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
    slidesPerView: 4,

    // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
    slidesPerGroup: 1,

    // Расстояние между слайдами в px
    spaceBetween: 40,

    //   Установите, true чтобы включить режим непрерывного цикла
    loop: true,

    // Брейкпоинты (точки останова)
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.4,
        spaceBetween: 24,
      },
      380: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      560: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      // // when window width is >= 640px
      750: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  function onOffSwiper3() {
    if (document.documentElement.clientWidth < mediaQuerySize) {
      swiper3.enable();
      console.log('mobile');
    } else {
      swiper3.disable();
      console.log('desktop');
    }
  }

  onOffSwiper3();

  window.addEventListener('resize', () => {
    onOffSwiper3();
  });
})();



