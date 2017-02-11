import React from 'react';
import s from './Overlay.css';

class Section extends React.Component {
  constructor() {
    super();

    this.scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + 'px';

    this.state = {
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
      document.documentElement.style.overflow = 'hidden';
      document.body.style.marginRight = this.scrollbarWidth;

      this.setState({
        willAnimate: true
      });

      window.requestAnimationFrame(() => {
        this.setState({
          active: true
        });
      });
    }
  }

  animateOut() {
    document.documentElement.style.overflow = '';
    document.body.style.marginRight = '';

    this.setState({
      active: false,
      closing: true
    });
  }

  getClassName() {
    let className = s.overlay;

    if (this.state.active) {
      className = s.overlayActive;
    }

    if (this.state.closing) {
      className = s.overlayClosing;

      window.setTimeout(() => {
        this.setState({
          closing: false
        });
      }, 1550);
    }

    return className;
  }

  render() {
    return (
      <section ref="section" className={this.getClassName()}>
        <div className={s.background} />
        <a ref="close" className={s.close}>
          &times;
        </a>
        <div className={s.wrapper}>

          <div className={s.title}>
            Lorem ipsum
          </div>
          <div className={s.card}>
            Lorem ipsum
          </div>
        </div>
      </section>
    );
  }
}

export default Section;
