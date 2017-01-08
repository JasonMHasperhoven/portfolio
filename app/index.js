import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import mh from './helpers/mh';
import * as s from './stylesheets/app.scss';

mh.init();

ReactDOM.render(<App />, mh.appElement);
