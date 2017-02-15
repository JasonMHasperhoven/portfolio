const getTransitionEnd = () => {
  if (window.QUnit) {
    return false;
  }

  let el = document.createElement('div');

  const TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  for (let name in TransitionEndEvent) {
    if (el.style[name] !== undefined) {
      return TransitionEndEvent[name];
    }
  }

  return false;
};

const transitionEndSupport = getTransitionEnd();
const transitionEnd = transitionEndSupport ? transitionEndSupport : 'transitionend';

EventTarget.prototype.transitionEndFallback = function(duration) {
  if (transitionEndSupport) return this;

  let transitionendEvent = document.createEvent('TransitionEvent');
  transitionendEvent.initEvent('transitionend', true, true);

  window.setTimeout(() => {
    this.dispatchEvent(transitionendEvent);
  }, duration);

  return this;
};

EventTarget.prototype.onTransitionEnd = function(func, duration) {
  const transitionEndListener = func => {
    if (this === event.target) {
      this.removeEventListener(transitionEnd, transitionEndListenerWithFallback);
      func();
    }

    return this;
  };

  const transitionEndListenerWithFallback = event => {
    transitionEndListener(func).transitionEndFallback(duration);
  };

  this.addEventListener(transitionEnd, transitionEndListenerWithFallback);

  return this;
};
