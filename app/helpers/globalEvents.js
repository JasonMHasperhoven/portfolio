export const windowLoad         = [];
export const windowScroll       = [];
export const windowResize       = [];
export const windowBeforeUnload = [];

window.onbeforeunload = () => {
  windowBeforeUnload.forEach(fn => fn());
}

window.onload = () => {
  windowLoad.forEach(fn => fn());
}

window.onscroll = () => {
  windowScroll.forEach(fn => fn());
}

window.addEventListener('resize', () => {
  windowResize.forEach(fn => fn());
});
