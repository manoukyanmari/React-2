// src/js/components/List.jsx
import React, {Component} from "react";
import { connect } from "react-redux";
import {RouterContext, Router, Route, link} from '../App.jsx';
import 'babel-polyfill';

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};


//dumb component
class List extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        <Router>
                    const {handleClick} = context;
                    const ConnectedList = ({ articles }) => (
                        <div className="row mt-5">
                            <div className="container">
                                {articles.map(el => (
                                    <div className="col-12 col-sm-4 col-md-3 p-2" key={el.id}>
                                        <div className="text-center border height100">
                                            <div>
                                                <link to="/movie">
                                                    <img src={el.src}/>
                                                </link>
                                            </div>
                                            <Route path="/movie" Component={ListComponent}/>
                                            <h5>{el.title}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                    const ListComponent = connect(mapStateToProps)(ConnectedList);
                    return(
                        <ListComponent/>
                    )
        </Router>

    }

}


export default List;

