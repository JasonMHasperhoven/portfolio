import React from 'react';
import Section from 'components/Section';
import fadeElements from 'helpers/fadeElements';
import IconFacebook from 'components/Icons/Facebook';
import IconGithub from 'components/Icons/Github';
import IconMail from 'components/Icons/Mail';
import Selfie from './components/Selfie';
import s from './AboutMe.css';

const up = string => <span className={s.copyUppercase}>{string}</span>;

class AboutMe extends React.Component {
  componentDidMount() {
    fadeElements.push(
      this.refs.title,
      this.refs.desc1,
      this.refs.desc2,
      this.refs.desc3,
      this.refs.icon1,
      // this.refs.icon2,
      this.refs.icon3,
      this.refs.selfie
    );
  }

  render() {
    return (
      <Section className={s.aboutMe} attributes={{ id: 'aboutme' }}>
        <div className={s.row}>
          <div ref="selfie" className={s.selfie} data-fade-gt-md>
            <Selfie />
          </div>
          <h2 ref="title" className={s.title} data-fade-gt-md>
            Hallo! <sup className={s.titleSup}>hello in dutch</sup>
          </h2>
          <div className={s.content}>
            <div className={s.desc}>
              <p ref="desc1" className={s.copy} data-fade-gt-md>
                {up('My name Martijn Hasperhoven')}, also known as {up('Jason')} and I am a dutch{' '}
                {up('front-end developer')}, with a strong eye for design.
              </p>
              <p ref="desc2" className={s.copy} data-fade-gt-md>
                I{'’'}m currently leading the front-end team at{' '}
                <a
                  href="https://www.consensys.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.copyLink}
                >
                  ConsenSys
                </a>{' '}
                in Dubai.
              </p>
              <p ref="desc3" className={s.copy} data-fade-gt-md>
                My philosophy is to get things {up('pixel-perfect')} using cutting-edge
                technologies. I{'’'}m looking to make awesome dreams into reality and grow
                personally and professionally anywhere in the world.
              </p>
            </div>
            <div className={s.actions}>
              <span className="is-inline-block" ref="icon1" data-fade-gt-md>
                <a href="mailto:martijn.hasperhoven@gmail.com" className={s.icon}>
                  <IconMail />
                </a>
              </span>
              {/* <span className="is-inline-block" ref="icon2" data-fade-gt-md data-fade-delay="100">
                <a
                  href="https://www.facebook.com/takingdownmusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.icon}
                >
                  <IconFacebook />
                </a>
              </span> */}
              <span className="is-inline-block" ref="icon3" data-fade-gt-md data-fade-delay="200">
                <a
                  href="https://github.com/JasonMHasperhoven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.icon}
                >
                  <IconGithub />
                </a>
              </span>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default AboutMe;
