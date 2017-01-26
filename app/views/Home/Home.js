import React from 'react';
import App from 'components/App';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Design from './components/Design';
import Code from './components/Code';
// import Misc from './components/Misc';
import Footer from 'components/Footer';

import { windowLoad } from 'helpers/globalEvents';

class Home extends React.Component {
  componentDidMount() {
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
      </div>
    );
  }
}

export default Home;
