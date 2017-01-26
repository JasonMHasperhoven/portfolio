import { windowScroll } from './globalEvents';
import media from './media';

const fadeElements = [];

export const setFadeElements = () => {
  fadeElements.forEach(element => {
    element.classList.add('fade');
  });
};

windowScroll.push(() => {
  fadeElements.forEach(element => {
    if (window.innerHeight * .8 > element.getBoundingClientRect().top) {
      if (element.classList.contains('is-visible')) return;

      let delay = 0;
      if (media.md && element.getAttribute('data-fade-delay-mobile')) {
        delay = element.getAttribute('data-fade-delay-mobile');
      }

      if (media.lg && element.getAttribute('data-fade-delay-desktop')) {
        delay = element.getAttribute('data-fade-delay-desktop');
      }

      window.setTimeout(() => {
        element.classList.add('is-visible');
      }, delay);
    }

    if (window.innerHeight < element.getBoundingClientRect().top) {
      element.classList.remove('is-visible');
    }
  });
});

export default fadeElements;
