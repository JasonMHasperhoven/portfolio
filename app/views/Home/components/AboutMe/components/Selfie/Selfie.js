import React from 'react';
import { windowScroll } from 'helpers/globalEvents';
import s from './Selfie.css';

class Selfie extends React.Component {
  componentDidMount() {
    this.refs.frame1.classList.add('is-visible');

    windowScroll.push(() => {
      const frameMiddle = this.refs.frame1.getBoundingClientRect().top + (
        (this.refs.frame1.getBoundingClientRect().bottom -
         this.refs.frame1.getBoundingClientRect().top) / 2
      );

      if (window.innerHeight * .6 > frameMiddle) {
        this.refs.frame2.classList.add('is-visible');
      } else {
        this.refs.frame2.classList.remove('is-visible');
      }

      if (window.innerHeight * .5 > frameMiddle) {
        this.refs.frame3.classList.add('is-visible');
      } else {
        this.refs.frame3.classList.remove('is-visible');
      }

      if (window.innerHeight * .4 > frameMiddle) {
        this.refs.frame4.classList.add('is-visible');
      } else {
        this.refs.frame4.classList.remove('is-visible');
      }
    });
  }

  render() {
    return (
      <div className={s.selfie}>
        <div ref="frame1" className={s.selfie1} />
        <div ref="frame2" className={s.selfie2} />
        <div ref="frame3" className={s.selfie3} />
        <div ref="frame4" className={s.selfie4} />
      </div>
    );
  }
}

export default Selfie;
