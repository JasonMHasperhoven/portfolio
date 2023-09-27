import "../vendor/modernizr.mq";
import { windowResize } from "./globalEvents";

let media = {};

const setMedia = () => {
  media = {
    xs: Modernizr.mq("(max-width: 320px)"),
    sm: Modernizr.mq("(min-width: 321px)"),
    md: Modernizr.mq("(min-width: 769px)"),
    lg: Modernizr.mq("(min-width: 1127px)"),
  };
};

setMedia();

windowResize.push(setMedia);

export default media;
