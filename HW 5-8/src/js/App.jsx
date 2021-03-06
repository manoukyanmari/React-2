import React, {Component} from "react";
import List from "./components/List.jsx";
import Home from "./components/Home.jsx";
import Movie from "./components/Movie.jsx";
import Footer from "./components/Footer.jsx";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from "./store/store";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

const HomePage = () =>(
    <div> Welcome to our Kinoman Club </div>
);

const NotFound = () => (
    <div>
        <h1> 404 Page Not Found </h1>
    </div>
);

class Root extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div>
                <Route path="/" component={Home}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/search" component={List}/>
                    <Route path="/movie/:id" component={Movie}/>
                    <Redirect exact from="/movies" to="search"/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

//dumb component
const HomeComponent = props  => (
    <div className="row mt-5">
        <div className="container">
            <Root/>
        </div>
    </div>
);



class App extends Component {
    render() {
        return (
                <HomeComponent/>
        )
    }
}

const routing = (
    <ErrorBoundary>
        <Provider store={store}>
            <div>
                <Router>
                    <App/>
                </Router>
                <Footer />
            </div>
        </Provider>
    </ErrorBoundary>
);

ReactDOM.render(routing, document.getElementById("root"));

export default App;

