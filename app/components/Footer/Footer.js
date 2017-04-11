import React from 'react';
import s from './Footer.css';

const Footer = () => (
  <footer className={s.footer}>
    <div className={s.wrapper}>
      <nav className={s.nav}>
        <a
          href="mailto:martijn.hasperhoven@gmail.com"
          className={s.navItem}
        >
          Contact me
        </a>
        <a
          href="https://www.facebook.com/takingdownmusic"
          target="_blank"
          rel="noopener noreferrer"
          className={s.navItem}
        >
          Facebook
        </a>
        <a
          href="https://github.com/JasonMHasperhoven"
          target="_blank"
          rel="noopener noreferrer"
          className={s.navItem}
        >
          Github
        </a>
      </nav>
      <div className={s.name}>
        mh. ui.
      </div>
    </div>
  </footer>
);

export default Footer;
