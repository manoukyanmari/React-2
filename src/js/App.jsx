import React from "react";
import List from "./components/List.jsx";
import Home from "./components/Home.jsx";
import Movie from "./components/Movie.jsx";
import Footer from "./components/Footer.jsx";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from "./store/store";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { Switch } from 'react-router'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

//dumb component
const App = () => (
    <div className="row mt-5">
        <Router>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/Movie" component={Movie} />
            </Switch>
        </Router>
        <div className="container">
            <List />
        </div>
    </div>
);

const routing = (
    <ErrorBoundary>
        <Provider store={store}>
            <div>
                <App/>
                <Footer />
            </div>
        </Provider>
    </ErrorBoundary>
);

ReactDOM.render(routing, document.getElementById("root"));

export default App;