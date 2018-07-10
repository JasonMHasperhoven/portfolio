import React from 'react';
// import smoothScroll from 'smooth-scroll';
import IconAngleDown from 'components/Icons/AngleDown';
import s from './Hero.css';
import bgImage from './assets/hero-bg.jpg';

class Hero extends React.Component {
  constructor() {
    super();

    this.r_t = <span className={s.headlineKerningFixMartijn} />;

    this.r_h = <span className={s.headlineKerningFixHasperhoven} />;

    // smoothScroll.init({
    //   speed: 1000,
    //   easing: 'easeInOutCubic'
    // });
  }

  componentDidMount() {
    this.windowHeight = window.innerHeight;
    this.refs.hero.style.height = `${this.windowHeight}px`;

    if (this.refs.bgImage.addEventListener) {
      this.refs.bgImage.addEventListener('load', this.fadeIn.bind(this));
    } else {
      this.refs.bgImage.attachEvent('onload', this.fadeIn.bind(this));
    }
  }

  fadeIn() {
    this.props.homeFadeIn();

    // 500 seems safe based upon timeline timeStamp analysis
    window.setTimeout(() => {
      this.animateIn();
    }, 500);
  }

  animateIn() {
    [this.refs.headline, this.refs.subline, this.refs.arrowDown].forEach(element => {
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
      <div ref="hero" className={s.hero}>
        <img ref="bgImage" role="presentation" src={bgImage} className="is-hidden" />
        <div className={s.backgroundCover} />
        <div className={s.backgroundGradient} />
        <div className={s.table}>
          <div className={s.tableCell}>
            <h1 ref="headline" className={s.headline}>
              mar{this.r_t}tijn hasper{this.r_h}hoven
            </h1>
            <h2 ref="subline" className={s.subline} data-fade-delay="300">
              ui developer.
            </h2>
          </div>
        </div>
        <a ref="arrowDown" href="#aboutme" className={s.action} data-scroll data-fade-delay="900">
          <IconAngleDown attributes={{ className: s.actionIcon }} />
        </a>
      </div>
    );
  }
}

Hero.propTypes = {
  homeFadeIn: React.PropTypes.func
};

export default Hero;
