import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware"
import userReducers from "./reducers/UserReducers"


const reducers = combineReducers({
    users: userReducers
});

export const store = createStore(reducers, applyMiddleware(
    thunk,
    promise,
    logger
));

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
