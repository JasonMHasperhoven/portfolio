import React from 'react';
import s from './Whatido.css';
import mh from '../../helpers/mh';

class Whatido extends React.Component {
  constructor() {
    super();
    this.positions = {};
    this.fadeElements = {};
  }

  componentDidMount() {
    this.fadeElements = [
      'title',
      'design',
      'htmlCss',
      'javascript',
      'animation',
      'optimization',
      'other',
    ];

    this.fadeElements.forEach((element) => {
      this.refs[element].classList.add('fade');
      this.positions[element] = this.getOffset(this.refs[element]);
    });

    mh.windowScroll.push(() => {
      this.fadeElements.forEach((element) => {
        if (window.pageYOffset + window.innerHeight * 0.85 > this.positions[element].top) {
          if (this.refs[element].classList.contains('is-visible')) return;

          let delay = 0;
          if (window.innerWidth > 768 && this.refs[element].getAttribute('data-fade-delay') !== 'undefined') {
            delay = this.refs[element].getAttribute('data-fade-delay');
          }

          window.setTimeout(() => {
            this.refs[element].classList.add('is-visible');
          }, delay);
        }

        if (window.pageYOffset + window.innerHeight < this.positions[element].top) {
          this.refs[element].classList.remove('is-visible');
        }
      });
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

  render() {
    return (
      <div className={s.whatido}>
        <h3 className={s.title} ref="title" id="whatido">
          What I do
        </h3>
        <div className={s.wrapper}>
          <div className={s.card} ref="design">
            <div className={s.cardImageDesign} />
            <div className={s.cardWrapper}>
              <h4 className={s.cardTitle}>
                Design
              </h4>
              <div className={s.labels}>
                <div className={s.label}>
                  Sketch
                </div>
                <div className={s.label}>
                  Zeplin
                </div>
                <div className={s.label}>
                  Photoshop
                </div>
                <div className={s.label}>
                  Typography
                </div>
                <div className={s.label}>
                  Aesthetics
                </div>
                <div className={s.label}>
                  Usability
                </div>
              </div>
            </div>
          </div>
          <div className={s.card} ref="htmlCss" data-fade-delay="150">
            <div className={s.cardImageHtmlCss} />
            <div className={s.cardWrapper}>
              <h4 className={s.cardTitle}>
                HTML CSS
              </h4>
              <div className={s.labels}>
                <div className={s.label}>
                  Components
                </div>
                <div className={s.label}>
                  Postcss
                </div>
                <div className={s.label}>
                  SASS
                </div>
                <div className={s.label}>
                  LESS
                </div>
                <div className={s.label}>
                  BEM
                </div>
                <div className={s.label}>
                  Responsiveness
                </div>
                <div className={s.label}>
                  Media-queries
                </div>
                <div className={s.label}>
                  Cross-browser
                </div>
              </div>
            </div>
          </div>
          <div className={s.card} ref="javascript" data-fade-delay="300">
            <div className={s.cardImageJavascript} />
            <div className={s.cardWrapper}>
              <h4 className={s.cardTitle}>
                JavaScript
              </h4>
              <div className={s.labels}>
                <div className={s.label}>
                  jQuery
                </div>
                <div className={s.label}>
                  React
                </div>
                <div className={s.label}>
                  Typescript
                </div>
                <div className={s.label}>
                  NPM
                </div>
                <div className={s.label}>
                  NodeJS
                </div>
                <div className={s.label}>
                  Express
                </div>
                <div className={s.label}>
                  HapiJS
                </div>
                <div className={s.label}>
                  Modernizr
                </div>
                <div className={s.label}>
                  AJAX
                </div>
              </div>
            </div>
          </div>
          <div className={s.card} ref="animation">
            <div className={s.cardImageAnimation} />
            <div className={s.cardWrapper}>
              <h4 className={s.cardTitle}>
                Animation
              </h4>
              <div className={s.labels}>
                <div className={s.label}>
                  CSS3 Animations & Transitions
                </div>
                <div className={s.label}>
                  GSAP
                </div>
                <div className={s.label}>
                  Mobile centric
                </div>
                <div className={s.label}>
                  GPU Composition layers
                </div>
              </div>
            </div>
          </div>
          <div className={s.card} ref="optimization" data-fade-delay="150">
            <div className={s.cardImageOptimization} />
            <div className={s.cardWrapper}>
              <h4 className={s.cardTitle}>
                Optimization
              </h4>
              <div className={s.labels}>
                <div className={s.label}>
                  Performance
                </div>
                <div className={s.label}>
                  SVGO
                </div>
                <div className={s.label}>
                  Browserify
                </div>
                <div className={s.label}>
                  Webpack
                </div>
                <div className={s.label}>
                  Babel
                </div>
                <div className={s.label}>
                  SEO
                </div>
                <div className={s.label}>
                  Cross-browser
                </div>
                <div className={s.label}>
                  Cross-device
                </div>
              </div>
            </div>
          </div>
          <div className={s.card} ref="other" data-fade-delay="300">
            <div className={s.cardImageOther} />
            <div className={s.cardWrapper}>
              <h4 className={s.cardTitle}>
                Other
              </h4>
              <div className={s.labels}>
                <div className={s.label}>
                  Terminal
                </div>
                <div className={s.label}>
                  Git
                </div>
                <div className={s.label}>
                  Ruby on Rails
                </div>
                <div className={s.label}>
                  PHP
                </div>
                <div className={s.label}>
                  Atom
                </div>
                <div className={s.label}>
                  Cubase
                </div>
                <div className={s.label}>
                  Logic Pro
                </div>
                <div className={s.label}>
                  Final Cut Pro
                </div>
                <div className={s.label}>
                  Adobe AE
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Whatido;
