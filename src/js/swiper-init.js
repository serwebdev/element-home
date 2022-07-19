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

// card-one__slider1 ===========================================================
(function () {
  // card-one__slider2 ===========================================================
  const swiperThumbs = new Swiper('.card-one__slider2', {
    // Optional parameters
    // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
    slidesPerView: 3,

    // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
    slidesPerGroup: 1,

    // Расстояние между слайдами в px
    spaceBetween: 24,

    //   Установите, true чтобы включить режим непрерывного цикла
    loop: true,

    // Брейкпоинты (точки останова)
    breakpoints: {
      // when window width is >= 320px
      // 320: {
      //   slidesPerView: 1.4,
      //   spaceBetween: 24,
      // },
      // 380: {
      //   slidesPerView: 2,
      //   spaceBetween: 24,
      // },
      // 560: {
      //   slidesPerView: 3,
      //   spaceBetween: 24,
      // },
      // // // when window width is >= 640px
      // 750: {
      //   slidesPerView: 4,
      //   spaceBetween: 24,
      // },
      // 900: {
      //   slidesPerView: 4,
      //   spaceBetween: 40,
      // },
    },
  });

  const swiper4 = new Swiper('.card-one__slider1', {
    // Optional parameters
    // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
    slidesPerView: 1,

    // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
    slidesPerGroup: 1,

    // Расстояние между слайдами в px
    // spaceBetween: 40,

    //   Установите, true чтобы включить режим непрерывного цикла
    loop: true,

    // Брейкпоинты (точки останова)
    breakpoints: {
      // when window width is >= 320px
      // 320: {
      //   slidesPerView: 1.4,
      //   spaceBetween: 24,
      // },
      // 380: {
      //   slidesPerView: 2,
      //   spaceBetween: 24,
      // },
      // 560: {
      //   slidesPerView: 3,
      //   spaceBetween: 24,
      // },
      // // // when window width is >= 640px
      // 750: {
      //   slidesPerView: 4,
      //   spaceBetween: 24,
      // },
      500: {
        // slidesPerView: 4,
        // spaceBetween: 40,
        navigation: {
          enabled: true,
        },

        pagination: {
          enabled: false,
        },
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      enabled: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
    },

    thumbs: {
      swiper: swiperThumbs,
    },
  });
})();

// more-model__slide====================================================================
const swiper5 = new Swiper('.more-model__slide', {
  // Optional parameters
  // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
  slidesPerView: 3,

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
    // 320: {
    //   slidesPerView: 1.37,
    //   spaceBetween: 24,
    // },
    // 500: {
    //   slidesPerView: 2.3,
    //   spaceBetween: 24,
    // },
    320: {
      slidesPerView: 1.33,
      spaceBetween: 24,
    },
    // // // when window width is >= 480px
    500: {
      slidesPerView: 1.7,
      spaceBetween: 24,
    },
    // // when window width is >= 640px
    650: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

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

// reviews-reviews__slider ===========================================================
(function () {
  const swiper6 = new Swiper('.reviews-reviews__slider', {
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
        slidesPerView: 1.4,
        spaceBetween: 16,
      },
      450: {
        slidesPerView: 1.8,
        spaceBetween: 16,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      600: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1050: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },

    // enabled: false,

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

  console.log(swiper6);

  const mediaQuerySize = 900;

  // function onOffSwiper6() {
  //   if (document.documentElement.clientWidth < mediaQuerySize) {
  //     swiper6.enable();
  //     console.log('mobile');
  //   } else {
  //     swiper6.disable();
  //     console.log('desktop');
  //   }
  // }

  // onOffSwiper6();

  // window.addEventListener('resize', () => {
  //   onOffSwiper6();
  // });

  // swiper6.disable();
})();
