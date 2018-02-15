import { combineReducers } from 'redux';
import user from './user';
import ReduxGhost, { reducer as ghostReducer } from 'redux-ghost';
import { localeReducer } from 'react-localize-redux';
import { routerReducer } from 'react-router-redux';

ReduxGhost.config({
    host: 'https://ghost',
    clientId: 'ghost',
    clientSecret: '',
});


const rootReducer = combineReducers({
    user,
    blog: ghostReducer,
    locale: localeReducer,
    routing: routerReducer
});

export default rootReducer;
