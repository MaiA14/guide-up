import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css'



import Store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {rootReducer} from './reducers/guide/GuideReducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


ReactDOM.render(
                 <Provider store={Store}>
                    <App />
                </Provider>
                ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
