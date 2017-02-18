import React from 'react';
import Overlay from 'components/Overlay';
import Square from './components/Square';
import s from './OverlayTechnologies.css';

class OverlayTechnologies extends React.Component {
  constructor() {
    super();

    this.title = 'Technologies';

    this.content = (
      <div>
        <p>
          Nowadays as a frontend developer you need to know a lot of different stuff!<br />
          Beyond a certain point, picking up new tools becomes easy.
        </p>
        <p>
          These are some of the technologies I’ve worked with
        </p>
        <div className={s.row}>
          <Square title="React" href="https://facebook.github.io/react/" className={s.react} />
          <Square title="PostCSS" href="http://postcss.org/" className={s.postcss} />
          <Square title="Webpack" href="https://webpack.github.io/" className={s.webpack} />
          <Square title="ECMAScript 2017" href="https://tc39.github.io/ecma262/" className={s.es2017} />
          <Square title="Browserify" href="http://browserify.org/" className={s.browserify} />
          <Square title="Babel" href="https://babeljs.io/" className={s.babel} />
          <Square title="NodeJS" href="https://nodejs.org/en/" className={s.nodejs} />
          <Square title="JSPM" href="http://jspm.io/" className={s.jspm} />
          <Square title="Modernizr" href="https://modernizr.com/" className={s.modernizr} />
          <Square title="Jasmine" href="https://jasmine.github.io/" className={s.jasmine} />
          <Square title="SASS" href="http://sass-lang.com/" className={s.sass} />
          <Square title="LESS" href="http://lesscss.org/" className={s.less} />
          <Square title="HapiJS" href="https://hapijs.com/" className={s.hapijs} />
          <Square title="SVGO" href="https://github.com/svg/svgo" className={s.svgo} />
          <Square title="GSAP" href="https://greensock.com/gsap" className={s.gsap} />
          <Square title="Gulp" href="http://gulpjs.com/" className={s.gulp} />
          <Square title="Typescript" href="https://www.typescriptlang.org/" className={s.typescript} />
          <Square title="Ruby on Rails" href="http://rubyonrails.org/" className={s.rails} />
          <Square title="Laravel" href="https://laravel.com/" className={s.laravel} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <Overlay id="technologies" title={this.title} content={this.content} />
    );
  }
};

export default OverlayTechnologies;
