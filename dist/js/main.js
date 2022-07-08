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

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    // Размер перетаскиваемого элемента полосы прокрутки в пикселях
    // dragSize: "auto",
    // Установите, true чтобы сделать полосу прокрутки перетаскиваемой, что позволяет вам управлять положением ползунка
    // draggable: false,
  },
});



