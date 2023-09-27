import { windowScroll } from "./globalEvents";
import media from "./media";

const fadeElements = [];

export const setFadeElements = () => {
  fadeElements.forEach((element) => {
    element.classList.add("fade");
  });
};

windowScroll.push(() => {
  fadeElements.filter(Boolean).forEach((element) => {
    if (!media.md && element.getAttribute("data-fade-gt-md")) return;

    if (window.innerHeight * 0.8 > element?.getBoundingClientRect().top) {
      if (element.classList.contains("is-visible")) return;

      let delay = 0;
      if (element.getAttribute("data-fade-delay")) {
        delay = element.getAttribute("data-fade-delay");
      }

      if (
        (media.xs || media.sm) &&
        element.getAttribute("data-fade-delay-media-s")
      ) {
        delay = element.getAttribute("data-fade-delay-media-s");
      }

      if (media.md && element.getAttribute("data-fade-delay-media-md")) {
        delay = element.getAttribute("data-fade-delay-media-md");
      }

      if (media.lg && element.getAttribute("data-fade-delay-media-lg")) {
        delay = element.getAttribute("data-fade-delay-media-lg");
      }

      window.setTimeout(() => {
        element.classList.add("is-visible");
      }, delay);
    }

    if (window.innerHeight < element.getBoundingClientRect().top) {
      element.classList.remove("is-visible");
    }
  });
});

export default fadeElements;
