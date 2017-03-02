import React from 'react';
import Overlay from 'components/Overlay';
import IconPlay from 'components/Icons/Play';
import s from './OverlayArticles.css';

const OverlayArticles = () => (
  <Overlay id="articles">
    <h2>
      Knowledge is Power
    </h2>
    <p>
      I believe that one of the keys to be successful is to follow the scene you’re in closely.
      Being aware of current trends and having a wide frame of reference is extremely useful.
    </p>
    <p>
      Hence I want to share some of the articles I have saved over the years related to frontend development.
    </p>
    <ul className={s.links}>
      <li>
        <a href="https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3" target="_blank" rel="noopener nofollow">
          The Two Pillars of JavaScript
        </a>
      </li>
      <li>
        <a href="https://egghead.io/lessons/javascript-format-console-log-with-css-and-string-template-tags" target="_blank" rel="noopener nofollow">
          Format console.log with CSS and String Template Tags
        </a>
      </li>
      <li>
        <a href="http://varun.ca/icon-component/" target="_blank" rel="noopener nofollow">
          Component based SVG Icon System
        </a>
      </li>
      <li>
        <a href="https://medium.freecodecamp.com/how-to-build-cross-platform-mobile-apps-using-nothing-more-than-a-json-markup-f493abec1873" target="_blank" rel="noopener nofollow">
          How to build cross-platform mobile apps using nothing more than a JSON markup
        </a>
      </li>
      <li>
        <a href="https://marmelab.com/blog/2017/02/06/react-is-slow-react-is-fast.html" target="_blank" rel="noopener nofollow">
          React is Slow, React is Fast: Optimizing React Apps in Practice
        </a>
      </li>
      <li>
        <a href="http://www.stackoverflow.blog/code-for-a-living/what-it-means-to-be-a-remote-first-company" target="_blank" rel="noopener nofollow">
          What it Means to be a Remote-First Company
        </a>
      </li>
      <li>
        <a href="https://medium.com/dev-channel/javascript-start-up-performance-69200f43b201#.dn0pbekq1" target="_blank" rel="noopener nofollow">
          JavaScript Start-up Performance
        </a>
      </li>
      <li>
        <a href="https://blog.sqreen.io/how-to-build-test-and-deploy-react-applications/" target="_blank" rel="noopener nofollow">
          How to build, test and deploy React Applications in 2017
        </a>
      </li>
      <li>
        <a href="https://medium.com/@steida/css-in-js-the-argument-refined-471c7eb83955#.91tuwveij" target="_blank" rel="noopener nofollow">
          CSS in JS: The Argument Refined
        </a>
      </li>
      <li>
        <a href="https://medium.com/hh-design/crash-course-ui-design-25d13ff60962#.8c4hjrptt" target="_blank" rel="noopener nofollow">
          Crash Course: UI Design
        </a>
      </li>
      <li>
        <a href="https://www.blockloop.io/mastering-bash-and-terminal?utm_source=hackernewsletter&utm_medium=email&utm_term=fav" target="_blank" rel="noopener nofollow">
          Mastering Bash and Terminal
        </a>
      </li>
      <li>
        <a href="https://shift.newco.co/why-i-only-work-remotely-2e5eb07ae28f#.e32ess5xd" target="_blank" rel="noopener nofollow">
          Why I Only Work Remotely
        </a>
      </li>
      <li>
        <a href="https://medium.com/agorapulse-stories/the-31-tools-we-use-to-make-our-semi-remote-saas-team-work-efficiently-fd1e785492b9#.8nv6tqmg6" target="_blank" rel="noopener nofollow">
          The 31 tools we use to make our “semi remote” SaaS team work efficiently
        </a>
      </li>
      <li>
        <a href="https://medium.freecodecamp.com/building-an-electron-application-with-create-react-app-97945861647c" target="_blank" rel="noopener nofollow">
          How to build an Electron app using create-react-app. No webpack configuration or “ejecting” necessary.
        </a>
      </li>
      <li>
        <a href="https://appendto.com/2017/01/learn-react-through-20-progressively-more-complex-open-source-apps/" target="_blank" rel="noopener nofollow">
          20 Open Source React Apps to Learn and Borrow From
        </a>
      </li>
      <li>
        <a href="https://assortment.io/posts/macos-development-environment" target="_blank" rel="noopener nofollow">
          macOS development environment from scratch
        </a>
      </li>
      <li>
        <a href="https://hackernoon.com/thinking-in-redux-when-all-youve-known-is-mvc-c78a74d35133" target="_blank" rel="noopener nofollow">
          Thinking in Redux (when all you’ve known is MVC)
        </a>
      </li>
      <li>
        <a href="https://www.smashingmagazine.com/2017/01/styled-components-enforcing-best-practices-component-based-systems/" target="_blank" rel="noopener nofollow">
          Styled-Components: Enforcing Best Practices In Component-Based Systems
        </a>
      </li>
      <li>
        <a href="https://m.alphasights.com/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b#.8ga4fumuc" target="_blank" rel="noopener nofollow">
          CSS Evolution: From CSS, SASS, BEM, CSS Modules to Styled Components
        </a>
      </li>
      <li>
        <a href="https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3#.vdyjt519w" target="_blank" rel="noopener nofollow">
          React’s Five Fingers of Death. Master these five concepts, then master React.
        </a>
      </li>
      <li>
        <a href="https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/" target="_blank" rel="noopener nofollow">
          GPU Animation: Doing It Right
        </a>
      </li>
      <li>
        <a href="https://medium.com/we-are-madewithlove/does-code-need-to-be-perfect-a53f36ad7163#.xktb7laz8" target="_blank" rel="noopener nofollow">
          Does code need to be perfect?
        </a>
      </li>
      <li>
        <a href="http://www.creativebloq.com/features/10-top-ui-trends-for-2017" target="_blank" rel="noopener nofollow">
          10 top UI trends for 2017
        </a>
      </li>
      <li>
        <a href="https://instapage.com/blog/how-airbnb-uses-landing-pages-to-drive-revenue?utm_medium=cpm&utm_source=facebook&utm_content=landing-page-examples&utm_campaign=AirBnBRetarget" target="_blank" rel="noopener nofollow">
          5 Ways Airbnb Landing Pages Generate Massive Revenue
        </a>
      </li>
      <li>
        <a href="https://medium.freecodecamp.com/is-mvc-dead-for-the-frontend-35b4d1fe39ec#.7dvn2hpzk" target="_blank" rel="noopener nofollow">
          Is Model-View-Controller dead on the front end?
        </a>
      </li>
      <li>
        <a href="http://blog.jonasbandi.net/2016/10/myth-of-superset.html" target="_blank" rel="noopener nofollow">
          TypeScript - The Myth of the Superset
        </a>
      </li>
      <li>
        <a href="https://blog.risingstack.com/nodejs-at-scale-npm-best-practices/" target="_blank" rel="noopener nofollow">
          npm Best Practices - Node.js at Scale
        </a>
      </li>
      <li>
        <a href="https://www.smashingmagazine.com/2016/09/the-building-blocks-of-progressive-web-apps/" target="_blank" rel="noopener nofollow">
          The Building Blocks Of Progressive Web Apps
        </a>
      </li>
      <li>
        <a href="https://ponyfoo.com/articles/json-web-tokens-vs-session-cookies" target="_blank" rel="noopener nofollow">
          JSON Web Tokens vs. Session Cookies: In Practice
        </a>
      </li>
      <li>
        <a href="https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/" target="_blank" rel="noopener nofollow">
          A Glimpse Into The Future With React Native For Web
        </a>
      </li>
      <li>
        <a href="https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108#.yw82g6p6v" target="_blank" rel="noopener nofollow">
          Smooth as Butter: Achieving 60 FPS Animations with CSS3
        </a>
      </li>
      <li>
        <a href="https://medium.freecodecamp.com/why-redux-makes-sense-to-me-and-how-i-conceptualize-it-c8a3a9db15ca#.eutp0120f" target="_blank" rel="noopener nofollow">
          Making sense of Redux
        </a>
      </li>
      <li>
        <a href="https://medium.com/radical-ux/nine-nasty-ux-truths-83b30ea94355#.utjhkxde6" target="_blank" rel="noopener nofollow">
          Nine Nasty UX Truths
        </a>
        </li>
      <li>
        <a href="https://medium.com/horrible-hacks/things-i-wish-i-knew-about-redux-9924abf2f9e0#.aklizr4xi" target="_blank" rel="noopener nofollow">
          Things I wish I knew about Redux
        </a>
      </li>
      <li>
        <a href="https://medium.com/peergrade-io/structuring-css-in-large-projects-37f1695f5ec8#.ppsvvksju" target="_blank" rel="noopener nofollow">
          Structuring CSS in large projects
        </a>
      </li>
    </ul>
  </Overlay>
);

export default OverlayArticles;
