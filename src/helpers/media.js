import "../vendor/modernizr.mq";
import { windowResize } from "./globalEvents";

let media = {};

const setMedia = () => {
  media = {
    xs: window.Modernizr.mq("(max-width: 320px)"),
    sm: window.Modernizr.mq("(min-width: 321px)"),
    md: window.Modernizr.mq("(min-width: 769px)"),
    lg: window.Modernizr.mq("(min-width: 1127px)"),
  };
};

setMedia();

windowResize.push(setMedia);

export default media;
