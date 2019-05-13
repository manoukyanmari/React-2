// src/js/components/List.jsx
import React, {Component} from "react";
import { connect } from "react-redux";
import 'babel-polyfill';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Movie from "./Movie.jsx";

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};


//dumb component
class List extends Component {
    constructor(props) {
        super(props);
        console.log(props,'aaaa');
    };

    render() {
            const ConnectedList = ({ articles }) => (
                <div className="row mt-5">
                    <div className="container">
                        {articles.map(el => (
                            <div className="col-12 col-sm-4 col-md-3 p-2" key={el.id}>
                                <div className="text-center border height100">
                                    <div>
                                        <Link to={this.props.match.url + '/movie'}>
                                            <img src={el.src}/>
                                        </Link>
                                    </div>
                                    <h5>{el.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Route path={this.props.match.url + '/movie'} component={Movie}/>
                </div>

            );
            const ListComponent = connect(mapStateToProps)(ConnectedList);
            return (
                    <ListComponent/>
                )

    }

}


export default List;

