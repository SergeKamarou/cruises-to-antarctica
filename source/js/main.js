import {iosVhFix} from './utils/ios-vh-fix';
import {initMobileMenu} from './modules/mobile-menu';
import {initMap} from './modules/map';


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  iosVhFix();

  // Modules
  initMobileMenu();
  initMap();

  window.addEventListener('load', () => {
  });
});
