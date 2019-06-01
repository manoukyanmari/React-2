import React from "react";
import Form from "./form/Form.jsx";
import List from "./List.jsx";
import {Route, Switch, Redirect} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                <h2>NetFlix roulette</h2>
                <label htmlFor="title">FIND YOUR MOVIE</label>
                    <Form history={this.props.history}/>
                </div>
                <Route path="/movie-list/:query" component={List}/>
            </div>
        )
    }
}
export default Home;