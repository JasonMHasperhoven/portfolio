import React from 'react';
import smoothScroll from 'smooth-scroll';
import IconAngleDown from 'components/Icons/AngleDown';
import { windowScroll } from 'helpers/globalEvents';
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

    window.setTimeout(() => {
      this.animateIn();
    }, 1100);
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
        <a data-scroll href="#aboutme" className={s.action} ref="arrowDown" data-fade-delay="900">
          <IconAngleDown attributes={{ className: s.actionIcon }} />
        </a>
      </div>
    );
  }
}

export default Hero;
