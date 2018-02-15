import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import { addTranslation } from 'react-localize-redux';
import {initialize} from "react-localize-redux/lib/index";

import configureStore from './store/configureStore';
const store = configureStore();
const rootEl = document.getElementById('root');

const languages = [
    { name: 'EN', code: 'en' },
    { name: 'LT', code: 'lt' },
    { name: 'RU', code: 'ru' }
];
const defaultLanguage = localStorage.getItem('language') || languages[0].code;
store.dispatch(initialize(languages, { defaultLanguage }));

const json = require('./utils/articles.json');
store.dispatch(addTranslation(json));

render(<Root store={store}/>, rootEl);

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default;

    render(<NextRoot store={store}></NextRoot>, rootEl);
  });
}