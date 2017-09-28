import React from 'react';
import ReactDOM from 'react-dom';
import {
    applyMiddleware as applyReduxMiddleware,
    combineReducers,
    compose,
    createStore as createReduxStore
} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {Consts} from './Consts';
import GoogleClient from './model/google-client';
import Context from './model/context';

import setupReducer from './model/Setup/Setup-reducer';
import {actionTypes} from './model/Setup/Setup-actions';

import AppStage from './stages/App/App-stage';

import reduxLogger from 'redux-logger'
import persistReduxState from 'redux-localstorage'

const googleClient = new GoogleClient(
    Consts.GOOGLE_CLIENT_ID,
    Consts.GOOGLE_DISCOVERY_DOCS,
    Consts.GOOGLE_SCOPES
);
const context = new Context(googleClient);

const reduxEnhancer = compose(
    applyReduxMiddleware(reduxLogger),
    persistReduxState('stored')
);

function storedReducer(state = {}, action = {}) {
    switch (action.type) {
        case actionTypes.SET_TARGET_TIMESHEET:
            return {
                timesheetUrl: action.url
            };
        default:
            return state;
    }
}

const reducer = combineReducers({
    "setup": setupReducer,
    "stored": storedReducer
});
const store = createReduxStore(
    reducer,
    {},
    reduxEnhancer
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
