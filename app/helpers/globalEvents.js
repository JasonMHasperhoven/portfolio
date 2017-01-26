export const windowLoad   = [];
export const windowScroll = [];
export const windowResize = [];

window.onload = () => {
  windowLoad.forEach(func => { func(); });

  window.onscroll = () => {
    windowScroll.forEach(func => { func(); });
  }

  window.addEventListener('resize', () => {
    windowResize.forEach(func => { func(); });
  });
}
