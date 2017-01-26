import * as requestAnimationFrame from './requestAnimationFrame.js';
import * as modernizr from './modernizr.mq';

class Mh {
  constructor() {
    this.appElement       = document.querySelector('.js-app');
    this.loaderElement    = document.querySelector('.js-loader');
    this.windowScroll     = [];
    this.windowLoad       = [];
    this.fadeElements     = [];
    this.parallaxSections = [];

    this.media = {
      mobile: Modernizr.mq('(max-width: 767px)'),
      desktop: Modernizr.mq('(min-width: 768px)')
    };
  }

  setFadeElements() {
    this.fadeElements.forEach((element) => {
      element.classList.add('fade');
    });
  }

  parallaxAnimate() {
    if (mh.media.mobile) {
      return;
    }

    this.parallaxSections.forEach((section) => {
      if (section.background.getBoundingClientRect().top < window.innerHeight &&
          section.wrapper.getBoundingClientRect().bottom > 0) {
        let translateYAmount = window.innerHeight - section.background.getBoundingClientRect().top;

        section.background.style = `transform:translateY(${translateYAmount / 48}px)`;
        section.wrapper.style    = `transform:translateY(${translateYAmount / 24}px)`;
      }
    });
  }

  fadeAnimate() {
    this.fadeElements.forEach((element) => {
      if (window.innerHeight * .8 > element.getBoundingClientRect().top) {
        if (element.classList.contains('is-visible')) return;

        let delay = 0;
        if (this.media.desktop && element.getAttribute('data-fade-delay-desktop') !== 'undefined') {
          delay = element.getAttribute('data-fade-delay-desktop');
        }

        if (this.media.mobile && element.getAttribute('data-fade-delay-desktop') !== 'undefined') {
          delay = element.getAttribute('data-fade-delay-mobile');
        }

        window.setTimeout(() => {
          element.classList.add('is-visible');
        }, delay);
      }

      if (window.innerHeight < element.getBoundingClientRect().top) {
        element.classList.remove('is-visible');
      }
    });
  }

  getOffset(el) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }

  init() {
    window.onload = () => {
      window.setTimeout(() => {
        this.setFadeElements();
        this.windowLoad.forEach((block) => { return block(); });
      }, 700);

      window.onscroll = () => {
        this.fadeAnimate();
        this.parallaxAnimate();
        this.windowScroll.forEach((block) => { return block(); });
      }
    }
  }
}

const mh = new Mh();

export default mh;
