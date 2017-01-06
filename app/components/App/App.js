import React from 'react';
import Hero from '../Hero/Hero.js';
import Whatido from '../Whatido/Whatido.js';
import Aboutme from '../Aboutme/Aboutme.js';
import Footer from '../Footer/Footer.js';
import mh from '../mh.js';
import s from './App.css';

class App extends React.Component {
  componentDidMount() {
    mh.windowLoad.push(() => {
      // window.setTimeout(() => {
        document.querySelector('.js-loader').classList.add('is-faded-out');
        document.querySelector('.js-app').classList.add('is-loaded');
      // }, 700);
    });
  }

  render() {
    return (
      <div className={s.app}>
        <Hero />
        <Whatido />
        <Aboutme />
        <Footer />
      </div>
    );
  }
}

export default App;
