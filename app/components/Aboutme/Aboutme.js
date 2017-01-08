import React from 'react';
import s from './Aboutme.css';
import mh from '../../helpers/mh';

class Aboutme extends React.Component {
  // componentDidMount() {
  //   this.fadeElements = [
  //     this.refs.frame1,
  //     this.refs.frame2,
  //     this.refs.frame3,
  //     this.refs.frame4
  //   ];
  //
  //   this.positions = {};
  //
  //   this.fadeElements.forEach((element) => {
  //     this.positions[element] = this.getOffset(this.refs[element]);
  //   });
  //
  //   this.positions.aboutMe = this.getOffset(this.refs.aboutMe);
  //
  //   mh.windowScroll.push(() => {
  //     // this.fadeElements.forEach((element) => {
  //       if (window.pageYOffset + window.innerHeight * 0.5 > this.positions.aboutMe.top) {
  //         // if (this.refs[element].classList.contains('is-visible')) return;
  //
  //         this.refs.frame1.classList.add('is-active');
  //       } else {
  //         this.refs.frame1.classList.remove('is-active');
  //       }
  //
  //       // if (window.pageYOffset + window.innerHeight < this.positions[element].top) {
  //       //   this.refs[element].classList.remove('is-visible');
  //       // }
  //     // });
  //   });
  // }
  //
  // getOffset(el) {
  //   var _x = 0;
  //   var _y = 0;
  //   while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
  //       _x += el.offsetLeft - el.scrollLeft;
  //       _y += el.offsetTop - el.scrollTop;
  //       el = el.offsetParent;
  //   }
  //   return { top: _y, left: _x };
  // }

  render() {
    return (
      <div className={s.aboutMe} ref="aboutMe">
        <div className={s.me}>
          <div className={s.meFrame1} />
        </div>
        <div className={s.wrapper}>
          <div className={s.row}>
            <div className={s.column}>
              <h3 className={s.title}>
                Hello
              </h3>
              <p className={s.copy}>
                <span className={s.copyUppercase}>My name Martijn Hasperhoven</span>, also known as <span className={s.copyUppercase}>Jason</span> and I am a dutch <span className={s.copyUppercase}>web designer, developer</span>, and <span className={s.copyUppercase}>creative</span>.
              </p>
              <p className={s.copy}>
                I am currently the lead <span className={s.copyUppercase}>front-end engineer</span> at <a href="https://www.getsimpl.com/" target="_blank" rel="noopener noreferrer" className={s.copyLink}>Simpl</a> in Mumbai.
              </p>
              <p className={s.copy}>
                My philosophy is to get things <span className={s.copyUppercase}>pixel-perfect</span> using the best technologies.
                I'm looking to make awesome dreams into reality and grow personally and professionally anywhere in the world.
              </p>
            </div>
            <div className={s.column}>
              <div className={s.actionWrapper}>
                <a href="mailto:martijn.hasperhoven@gmail.com" className={s.buttonPrimary}>
                  Contact me
                </a>
                <div className={s.followMe}>
                  Follow me
                </div>
                <div className={s.socialMediaWrapper}>
                  <a href="https://github.com/JasonMHasperhoven" target="_blank" rel="noopener noreferrer" className={s.socialMedia}>
                    <svg height="20" width="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z" fill="#fff" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/takingdownmusic" target="_blank" rel="noopener noreferrer" className={s.socialMedia}>
                    <svg width="10" height="20" viewBox="0 0 10 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M9.98883929,0.991071429 L9.98883929,3.9375 L8.23660714,3.9375 C7.59672299,3.9375 7.16517969,4.07142723 6.94196429,4.33928571 C6.71874888,4.6071442 6.60714286,5.00892589 6.60714286,5.54464286 L6.60714286,7.65401786 L9.87723214,7.65401786 L9.44196429,10.9575893 L6.60714286,10.9575893 L6.60714286,19.4285714 L3.19196429,19.4285714 L3.19196429,10.9575893 L0.345982143,10.9575893 L0.345982143,7.65401786 L3.19196429,7.65401786 L3.19196429,5.22098214 C3.19196429,3.83704665 3.57886518,2.76376869 4.35267857,2.00111607 C5.12649196,1.23846345 6.15698761,0.857142857 7.44419643,0.857142857 C8.5379519,0.857142857 9.3861577,0.901785268 9.98883929,0.991071429 L9.98883929,0.991071429 Z" fill="#fff"></path>
                    </svg>
                  </a>
                </div>
                <div className={s.followMe}>
                  My music
                </div>
                <a href="./mp3/Execute.mp3" className={s.button}>
                  Download Execute
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutme;
