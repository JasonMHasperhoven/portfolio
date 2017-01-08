import * as requestAnimationFrame from './requestAnimationFrame.js';

class Mh {
  constructor() {
    this.appElement    = document.querySelector('.js-app');
    this.loaderElement = document.querySelector('.js-loader');
    this.windowScroll  = [];
    this.windowLoad    = [];
  }

  init() {
    window.onload = () => {
      window.setTimeout(() => {
        this.windowLoad.forEach((block) => { return block(); });
      }, 700);

      window.onscroll = () => {
        this.windowScroll.forEach((block) => { return block(); });
      }
    }
  }
}

const mh = new Mh();

export default mh;
