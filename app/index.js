import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import * as s from './stylesheets/app.scss';
import mh from './components/mh';

ReactDOM.render(<App />, document.querySelector('.js-app'));

mh.init();
