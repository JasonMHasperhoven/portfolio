import React from 'react';
import s from './Overlay.css';
import * as onTransitionEnd from 'helpers/transitionEnd';

class Overlay extends React.Component {
  constructor() {
    super();

    this.scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + 'px';
    this.transitionDurationIn = 2000;
    this.transitionDurationOut = 1250;

    this.state = {
      willChange: false,
      active: false,
      closing: false
    };
  }

  componentDidMount() {
    this.toggles = document.querySelectorAll('.js-overlay-toggle');

    this.toggles.forEach(toggle => {
      toggle.addEventListener('click', event => this.animateIn(event));
    });

    this.refs.close.addEventListener('click', () => this.animateOut());
  }

  animateIn(event) {
    if (event.currentTarget.getAttribute('data-overlay-id') == this.props.id) {
      this.setState({
        willChange: true
      });

      window.setTimeout(() => {
        this.setState({
          active: true
        });

        this.refs.wrapper.onTransitionEnd(() => {
          document.documentElement.style.overflow = 'hidden';
          document.body.style.marginRight = this.scrollbarWidth;
          this.refs.section.style.overflowY = 'auto';
          this.refs.close.classList.add(s.closeActive);
        }, this.transitionDurationIn);
      }, 50);
    }
  }

  animateOut() {
    document.documentElement.style.overflow = '';
    document.body.style.marginRight = '';
    this.refs.section.style.overflowY = '';
    this.refs.close.classList.remove(s.closeActive);

    this.setState({
      active: false,
      closing: true
    });

    this.refs.wrapper.onTransitionEnd(() => {
      this.setState({
        willChange: false,
        closing: false
      });
    }, this.transitionDurationIn);
  }

  render() {
    const getClassName = () => {
      let className = s.overlay;

      if (this.state.active) {
        className = s.overlayActive;
      }

      if (this.state.closing) {
        className = s.overlayClosing;
      }

      if (this.state.willChange) {
        className += ` ${s.overlayWillChange}`;
      }

      return className;
    }

    return (
      <section ref="section" className={getClassName()}>
        <div ref="wrapper" className={s.wrapper}>
          <a ref="close" className={s.close}>
            &times;
          </a>
          <div ref="contentWrapper" className={s.contentWrapper}>
            <div className={s.title}>
              {this.props.title}
            </div>
            <div className={s.card}>
              {this.props.content}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Overlay;
