import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware as applyReduxMiddleware, combineReducers, createStore as createReduxStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {Consts} from './Consts';
import GoogleClient from './model/google-client';
import Context from './model/context';

import setupReducer from './model/Setup/Setup-reducer';

import AppStage from './stages/App/App-stage';

import reduxLogger from 'redux-logger'

const googleClient = new GoogleClient(
    Consts.GOOGLE_CLIENT_ID,
    Consts.GOOGLE_DISCOVERY_DOCS,
    Consts.GOOGLE_SCOPES
);
const context = new Context(googleClient);

const reducer = combineReducers({"setup": setupReducer});
const store = createReduxStore(
    reducer,
    applyReduxMiddleware(reduxLogger)
);

ReactDOM.render((
        <Provider store={store}>
            <BrowserRouter>
                <AppStage context={context}/>
            </BrowserRouter>
        </Provider>),
    document.getElementById('root'));

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
