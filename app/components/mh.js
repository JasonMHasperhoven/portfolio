class Mh {
  constructor() {
    this.windowScroll = [];
    this.windowLoad = [];
  }

  init() {
    window.onload = () => {
      window.setTimeout(() => {
        this.windowLoad.forEach((block) => { return block(); });
      }, 200);

      window.onscroll = () => {
        this.windowScroll.forEach((block) => { return block(); });
      }
    }
  }
}

const mh = new Mh();

export default mh;
