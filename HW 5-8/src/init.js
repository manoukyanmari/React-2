import store from "./js/store/store";
import App from "./js/App.jsx";
import ErrorBoundary from "./js/components/ErrorBoundary.jsx";
import Provider from "react-redux/es/components/Provider";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./js/components/Footer.jsx";
import ReactDOM from "react-dom";
import React from "react";

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
