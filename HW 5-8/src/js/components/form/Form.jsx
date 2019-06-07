// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import * as actions from "../../actions/action";
import {Link} from "react-router-dom";
import {ROOT_URL} from "../../constants/action-types";
import * as appliedActions from "../../store/appliedActions";




// smart component
class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('query');
        var type = 'title';
        this.state = {
            query: query? query: '',
            type: type? type: 'title',
            movies: []
        };
        //this.movies = this.state.movies;
        this.fetchData = this.fetchData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClickType = this.onClickType.bind(this);
        let self = this;
    }

    componentDidMount(){
        this.props.removeMovies();
    }
    handleChange = (event) => {
        this.setState({ query: event.target.value});
    };

    fetchData = (query, type) => {
        let data = actions.getMoviesData();
    };



    handleSubmit = event => {
        event.preventDefault();
        const { query, type } = this.state;
        console.log(query, 'query');
        appliedActions.getMovies(query, type);
        this.props.removeMovies();
        let func = this.fetchData;
        setTimeout(function () {
            func();
        }, 3000)
       // this.setState({ movies: []});


    };

    onClickType = (type) => {
        this.setState({type: type, movies: []})
    };

    render() {
        const { query } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group text-right">
                        <input
                            type="text"
                            className="form-control"
                            id="query"
                            value={query}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <span>SEARCH BY: </span>
                            <button type="button" id="query" className="btn btn-primary btn-lg float-left margin-for-btn" onClick={() => this.onClickType('title')}>
                                TITLE
                            </button>
                            <button type="button" id="title" className="btn btn-primary btn-lg float-left margin-for-btn" onClick={() => this.onClickType('genres')}>
                                GENRE
                            </button>
                        </div>
                        <div className="col-md-6 text-right">
                            <button type="submit" className="btn btn-success btn-lg float-right margin-for-btn"
                                onClick={() => this.props.history.push('/search?query=' + this.state.query)}>
                                SEARCH
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    onGettingFilms: () => dispatch(appliedActions.getMovies),
    addMovies: movie => dispatch(
        actions.addMovie(movie)
    ),
    removeMovies: () => dispatch(
        actions.deleteAllMovies()
    )
});

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.movies,
        movie: state.movie
    };
};

export default connect(mapStateToProps,
    mapDispatchToProps)(ConnectedForm);
