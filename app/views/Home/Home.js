import React from 'react';
import App from 'components/App';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Design from './components/Design';
import Code from './components/Code';
// import Misc from './components/Misc';
import Footer from 'components/Footer';
import OverlayTransaction from './components/OverlayTransaction';

import { windowLoad, windowBeforeUnload } from 'helpers/globalEvents';

class Home extends React.Component {
  componentDidMount() {
    windowBeforeUnload.push(() => {
      window.scrollTo(0, 0);
    });

    windowLoad.push(() => {
      App.fadeIn();
    });
  }

  render() {
    return (
      <div>
        <Hero />
        <AboutMe />
        <Design />
        <Code />
        <Footer />
        <OverlayTransaction />
      </div>
    );
  }
}

export default Home;
