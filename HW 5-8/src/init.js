import 'rxjs';
import App from "./js/App.jsx";
import ErrorBoundary from "./js/components/ErrorBoundary.jsx";
import Provider from "react-redux/es/components/Provider";
import {BrowserRouter as Router} from "react-router-dom";
import { rootEpic } from './js/store/appliedActions';
import Footer from "./js/components/Footer.jsx";
import rootReducer from "./js/reducers/reducer";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import { createEpicMiddleware, ofType } from 'redux-observable';
import { createStore, applyMiddleware, compose } from "redux";
import React from "react";


const epicMiddleware = createEpicMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpic);

const routing = (
    < ErrorBoundary >
    < Provider
store = {store} >
    < div >
    < Router >
    < App/>
    < /Router>
    < Footer / >
    < /div>
    < /Provider>
    < /ErrorBoundary>
)

ReactDOM.render(routing, document.getElementById("root"));
