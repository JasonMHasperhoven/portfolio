import { setFadeElements } from 'helpers/fadeElements';

class Application {
  constructor() {
    this.rootElement   = document.querySelector('.js-app');
    // this.loaderElement = document.querySelector('.js-loader');
  }

  fadeIn() {
    setFadeElements();

    window.setTimeout(() => {
      document.body.classList.add('is-loaded');
    }, 500);
  }
}

const App = new Application();

export default App;
