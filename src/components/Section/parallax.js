import media from "../../helpers/media";
import { windowScroll } from "../../helpers/globalEvents";

const parallaxSections = [];

windowScroll.push(() => {
  if (!media.md) {
    return;
  }

  parallaxSections.filter(Boolean).forEach((section) => {
    if (
      section.background?.getBoundingClientRect().top < window.innerHeight &&
      section.wrapper?.getBoundingClientRect().bottom > 0
    ) {
      const translateYAmount =
        window.innerHeight - section.background?.getBoundingClientRect().top;

      section.background.style = `transform: translateY(${
        translateYAmount / 48
      }px)`;
      section.wrapper.style = `transform: translateY(${
        translateYAmount / 24
      }px)`;
    }
  });
});

export default parallaxSections;
