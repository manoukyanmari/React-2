// src/js/components/List.jsx
import React, {Component} from "react";
import { connect } from "react-redux";
import {Router, Route, handleClick} from '../App.jsx';
import 'babel-polyfill';

const mapStateToProps = state => {
    return {
        movies: state.movies
    };
};


//dumb component
class List extends Component {
    constructor(props) {
        super(props);
    };

    render() {
            const ConnectedList = ({ movies }) => (
                    <div className="row mt-5">
                        <div className="container">
                            {movies.map(el => (
                                <div className="col-12 col-sm-4 col-md-3 p-2" key={el.id}>
                                    <div className="text-center border height100">
                                        <div>
                                            <Link to="/movie">
                                                <img src={el.src}/>
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
                <Router>
                    const {handleClick} = context;
                    <Route path="/movie" Component={ListComponent}/>
                    {/*<ListComponent/>*/}
                </Router>
                )

    }

}


export default List;

