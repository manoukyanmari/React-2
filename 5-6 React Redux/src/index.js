import React from 'react';
import {render} from 'react-dom';
import App from './js/components/app/app';
import './reset.scss';
import {BrowserRouter as Router} from "react-router-dom";
import Provider from "react-redux/es/components/Provider";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./js/reducers";
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const rootEl = document.getElementById('app');


render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>, rootEl);

if (module.hot) {
    module.hot.accept();
}
