import React, {Component} from "react";
import Home from "./components/Home.jsx";
import {Route, Switch, Redirect} from "react-router-dom";
import List from "./components/List.jsx";

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
        console.log(props,'aaaa');
    };
    render() {
        return (
            <div>
                <Route path="/" component={Home}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/movie-list/:query" component={List}/>
                    <Redirect exact from="/movies" to="movie-list"/>
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

export default App;

