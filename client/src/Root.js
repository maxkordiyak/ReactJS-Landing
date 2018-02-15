import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, push } from 'react-router-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import App from './App';

const Root = ({ store }) => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Provider store={store}>
                <App/>
            </Provider>
        </div>
    </BrowserRouter>
);

export default Root;
