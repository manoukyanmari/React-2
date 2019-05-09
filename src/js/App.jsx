import React, {Component} from "react";
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
const HomeComponent = props  => (
    <div className="row mt-5">
        <Home/>
        <div className="container">
           {props.content}
        </div>
    </div>
);

const NotFound = () => (
    <div>
        <h1> 404 Page Not Found </h1>
    </div>
);

class App extends Component {
    render() {
        let Child;
        let ChildComponent;
        const location = window.location;
        switch(location.pathname) {
            case "/" :
                Child = HomeComponent;
                ChildComponent = List;
                break;
            case "/movie" :
                Child = HomeComponent;
                ChildComponent = Movie;
                break;
            default :
                Child = NotFound;

        }
        return (
            <div> <Child content={<ChildComponent/>}/> </div>
        )
    }
}

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