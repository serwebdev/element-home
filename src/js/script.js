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
