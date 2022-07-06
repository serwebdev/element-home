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
