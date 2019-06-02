import React, {Component} from "react";
import { connect } from "react-redux";
import 'babel-polyfill';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Movie from "./Movie.jsx";
import Root from "./../App.jsx";

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

const imgStyle = {
    maxWidth: '100%'
};
//dumb component
class List extends Component {
    constructor(props) {
        super(props);

        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('query');
        this.state = {
            query: query? query: ''
        };
    };
    render() {
            const ConnectedList = ({ articles }) => (
                <div className="row mt-5">
                    <div className="container">
                        <Route path={this.props.match ? this.props.match.url + '/movie/:id' : ''} component={Movie}/>
                        {articles.map(el => (
                            <div className="col-2 col-sm-4 col-md-3 p-2" key={el.id}>
                                <div className="text-center border height100">
                                    <div>
                                        <Link to={'/movie/' + el.id}>
                                            <img style={imgStyle} src={el.poster_path}/>
                                        </Link>
                                    </div>
                                    <h5>{el.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            );
            const ListComponent = connect(mapStateToProps)(ConnectedList);
            return (
                    <ListComponent onChange={this.handleChange}/>
                )
    }
}


export default List;

