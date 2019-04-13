import React from "react";
import List from "./components/List.jsx";
import Home from "./components/Home.jsx";
import Movie from "./components/Movie.jsx";
import ReactDOM from "react-dom";
import Provider from "react-redux/es/components/Provider";
import store from "./store/index";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { Switch } from 'react-router'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const footer = {
  backgroundColor: 'grey',
  color: '#fff',
  padding: '0 30px'
};
// dumb component
const Footer = (props) => {
    return(
        <section id="footer">
            <div className="container footer" style={footer}>
                <div className="row text-sm-left text-md-left">
                    <div>
                        <h6>Footer Information</h6>
                    </div>
                </div>
            </div>
        </section>
    )
};
//dumb component
const App = () => (
    <div className="row mt-5">
        <Router>
            <Switch>
                <Route path="/" component={Movie} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
        <div className="container">
            <List />
        </div>
        <Footer />
    </div>
);

const routing = (
    <ErrorBoundary>
        <Provider store={store}>
            <div>
                <App/>
            </div>
        </Provider>
    </ErrorBoundary>
);

ReactDOM.render(routing, document.getElementById("root"));

export default App;