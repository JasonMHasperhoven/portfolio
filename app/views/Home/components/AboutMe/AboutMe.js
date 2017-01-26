import React from 'react';
import Section from 'components/Section';
import Selfie from './components/Selfie';
import fadeElements from 'helpers/fadeElements';
import IconFacebook from './components/IconFacebook';
import IconGithub from './components/IconGithub';
import IconMail from './components/IconMail';
import s from './AboutMe.css';

class AboutMe extends React.Component {
  constructor() {
    super();

    this.title = 'Hello';
  }

  componentDidMount() {
    fadeElements.push(
      this.refs.desc1,
      this.refs.desc2,
      this.refs.desc3,
      this.refs.icon1,
      this.refs.icon2,
      this.refs.icon3,
      this.refs.selfie
    );
  }

  render() {
    return (
      <div className={s.aboutMe} id="aboutme">
        <Section title={this.title}>
          <div className={s.row}>
            <div className={s.colLeft}>
              <div className={s.desc}>
                <p ref="desc1" className={s.copy}>
                  <span className={s.copyUppercase}>My name Martijn Hasperhoven</span>, also known as <span className={s.copyUppercase}>Jason</span> and I am a dutch <span className={s.copyUppercase}>web designer, developer</span>, and <span className={s.copyUppercase}>creative</span>.
                </p>
                <p ref="desc2" className={s.copy}>
                  I am currently the lead <span className={s.copyUppercase}>front-end engineer</span> at <a href="https://www.getsimpl.com/" target="_blank" rel="noopener noreferrer" className={s.copyLink}>Simpl</a> in Mumbai.
                </p>
                <p ref="desc3" className={s.copy}>
                  My philosophy is to get things <span className={s.copyUppercase}>pixel-perfect</span> using cutting-edge technologies.
                  I’m looking to make awesome dreams into reality and grow personally and professionally anywhere in the world.
                </p>
              </div>
              <div>
                <span className="is-inline-block" ref="icon1">
                  <a className={s.icon}>
                    <IconMail />
                  </a>
                </span>
                <span className="is-inline-block" ref="icon2" data-fade-delay-desktop="100">
                  <a className={s.icon}>
                    <IconFacebook />
                  </a>
                </span>
                <span className="is-inline-block" ref="icon3" data-fade-delay-desktop="200">
                  <a className={s.icon}>
                    <IconGithub />
                  </a>
                </span>
              </div>
            </div>
            <div className={s.colRight}>
              <div ref="selfie" className={s.selfie}>
                <Selfie />
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }
};

export default AboutMe;
