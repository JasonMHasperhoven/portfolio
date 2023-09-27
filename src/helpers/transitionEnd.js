/* eslint-disable no-restricted-globals */

const getTransitionEnd = () => {
  if (window.QUnit) {
    return false;
  }

  const el = document.createElement("div");

  const TransitionEndEvent = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd otransitionend",
    transition: "transitionend",
  };

  for (const name in TransitionEndEvent) {
    if (el.style[name] !== undefined) {
      return TransitionEndEvent[name];
    }
  }

  return false;
};

const transitionEndSupport = getTransitionEnd();
const transitionEnd = transitionEndSupport || "transitionend";

EventTarget.prototype.transitionEndFallback = function (duration) {
  if (transitionEndSupport) return this;

  const transitionendEvent = document.createEvent("TransitionEvent");
  transitionendEvent.initEvent("transitionend", true, true);

  window.setTimeout(() => {
    this.dispatchEvent(transitionendEvent);
  }, duration);

  return this;
};

EventTarget.prototype.onTransitionEnd = function (fn, duration) {
  const transitionEndListener = (fn) => {
    if (this === event.target) {
      this.removeEventListener(
        transitionEnd,
        transitionEndListenerWithFallback
      );
      fn();
    }

    return this;
  };

  const transitionEndListenerWithFallback = (event) => {
    transitionEndListener(fn).transitionEndFallback(duration);
  };

  this.addEventListener(transitionEnd, transitionEndListenerWithFallback);

  return this;
};
