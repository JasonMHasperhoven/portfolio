import React from 'react';
import smoothScroll from 'smooth-scroll';
import mh from '../../helpers/mh';
import s from './Hero.css';

class Hero extends React.Component {
  constructor() {
    super();

    smoothScroll.init({
      speed: 1000,
      easing: 'easeInOutCubic'
    });
  }

  componentDidMount() {
    this.windowHeight = window.innerHeight;
    this.refs.hero.style.height = `${this.windowHeight}px`;

    // mh.windowScroll.push(() => {
    //   this.fadeScroll();
    // });
  }

  animateIn() {
    [this.refs.headline, this.refs.subline, this.refs.arrowDown].forEach((element) => {
      let delay = 0;
      if (element.getAttribute('data-fade-delay') !== 'undefined') {
        delay = element.getAttribute('data-fade-delay');
      }

      window.setTimeout(() => {
        element.classList.add('is-visible');
      }, delay);
    });
  }

  fadeScroll() {
    let opacity = ((this.windowHeight * .8) - window.pageYOffset) / (this.windowHeight * .8);
    this.refs.hero.style.opacity = opacity;
  }

  render() {
    return (
      <div className={s.hero} ref="hero">
        <div className={s.backgroundCover} />
        <div className={s.backgroundGradient} />
        <div className={s.table}>
          <div className={s.tableCell}>
            <h1 className={s.headline} ref="headline">
              mar<span className={s.headlineKerningFixMartijn}></span>tijn
              hasper<span className={s.headlineKerningFixHasperhoven}></span>hoven
            </h1>
            <h2 className={s.subline} ref="subline" data-fade-delay="300">
              ui developer.
            </h2>
          </div>
        </div>
        <a data-scroll href="#whatido" className={s.action} ref="arrowDown" data-fade-delay="900">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7"  className={s.actionIcon}>
            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M5.5 5.5l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    );
  }
}

export default Hero;
