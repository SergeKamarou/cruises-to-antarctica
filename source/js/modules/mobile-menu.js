const mobileMenuElement = document.querySelector('[data-mobile-menu]');
const menuToggleElement = document.querySelector('[data-menu-toggle]');
const menuOverlayElement = document.querySelector('[data-menu-close]');

const breakpoint = window.matchMedia('(max-width:766px)');

const menuClickHandler = (evt) => {
  if (evt.target.closest('[data-menu-close]') || evt.target.closest('[data-nav-link]')) {
    // stopPropagation();
    closeMenu();
  }
};

const initMobileMenu = () => {
  // debugger
  if (mobileMenuElement && breakpoint.matches) {
    if (menuToggleElement.checked) {
      menuOverlayElement.classList.add('is-active');
      document.body.classList.add('scroll-lock');
    }
    menuToggleElement.addEventListener('change', (evt) => {
      if (evt.target.checked) {
        menuOverlayElement.classList.add('is-active');
        document.body.classList.add('scroll-lock');
        // console.log(evt.target.checked);
      } else {
        menuOverlayElement.classList.remove('is-active');
        document.body.classList.remove('scroll-lock');
      }
    });

    document.addEventListener('click', menuClickHandler);

  } else {
    menuOverlayElement.classList.remove('is-active');
    document.body.classList.remove('scroll-lock');
  }

  breakpoint.addEventListener('change', initMobileMenu);
};

function closeMenu() {
  menuToggleElement.checked = false;
  menuOverlayElement.classList.toggle('is-active');
  document.body.classList.toggle('scroll-lock');
}

// if (menuToggleElement.checked) {
//   document.body.classList.add('scroll-lock');
//   // document.addEventListener('click', menuClickHandler);
//   if (evt.target.closest('[data-menu-close]')) {
//     menuToggleElement.checked = false;
//   }
// } else {
//   document.body.classList.remove('scroll-lock');
// }
export {initMobileMenu};
