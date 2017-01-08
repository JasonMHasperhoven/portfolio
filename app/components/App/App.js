import React from 'react';
import Hero from '../Hero/Hero';
import Whatido from '../Whatido/Whatido';
import Aboutme from '../Aboutme/Aboutme';
import Footer from '../Footer/Footer';
import mh from '../../helpers/mh';

class App extends React.Component {
  componentDidMount() {
    mh.windowLoad.push(() => {
      mh.appElement.classList.remove('is-hidden');

      window.setTimeout(() => {
      // window.requestAnimationFrame(() => {
        mh.appElement.classList.add('is-loaded');
        mh.loaderElement.classList.add('is-faded-out');
        this.refs.hero.animateIn();
      // });
      }, 200);
    });
  }

  render() {
    return (
      <div>
        <Hero ref="hero" />
        <Whatido />
        <Aboutme />
        <Footer />
      </div>
    );
  }
}

export default App;
