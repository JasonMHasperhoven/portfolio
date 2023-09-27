import { setFadeElements } from "../../helpers/fadeElements";

class Application {
  constructor() {
    this.rootElement = document.querySelector(".js-app");
  }

  fadeIn(fn) {
    setFadeElements();

    // 300 seems safe based upon timeline timeStamp analysis
    window.setTimeout(() => {
      document.body.classList.add("is-loaded");
      fn();
    }, 300);
  }
}

const App = new Application();

export default App;
