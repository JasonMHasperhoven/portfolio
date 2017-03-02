import React from 'react';
import App from 'components/App';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Design from './components/Design';
import Code from './components/Code';
import Misc from './components/Misc';
import Footer from 'components/Footer';
import OverlayArticles from './components/OverlayArticles';
import OverlayTransaction from './components/OverlayTransaction';
import OverlayTechnologies from './components/OverlayTechnologies';
import OverlayOptimization from './components/OverlayOptimization';
import OverlaySimpl from './components/OverlaySimpl';

import { windowLoad, windowBeforeUnload } from 'helpers/globalEvents';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    windowBeforeUnload.push(() => {
      window.scrollTo(0, 0);
    });

    App.fadeIn(() => {
      console.timeStamp('app fadein');

      window.setTimeout(() => {
        console.timeStamp('loadedBelowTheFold');

        this.setState({
          isLoaded: true
        });
      }, 1500);
    });
  }

  render() {
    return (
      <div>
        <Hero />
        <AboutMe />
        {this.state.isLoaded ? (
          <div>
            <Design />
            <Code />
            <Misc />
            <Footer />
            <OverlayArticles />
            <OverlayOptimization />
            <OverlayTransaction />
            <OverlayTechnologies />
            <OverlaySimpl />
          </div>
        ) : (
          <div>
            Loading...
          </div>
        )}
      </div>
    );
  }
}

export default Home;
