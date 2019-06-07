import React from 'react';
import {connect} from "react-redux";
import sortBy from 'lodash.sortby';
import '../../../style.scss';
import Card from "../card/card";
import {getMovies} from '../../../js/actions/movie-action';


const mapDispatchToProps = (dispatch) => ({
    onGettingMovies: () => dispatch(getMovies()),
});

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.moviesData.movies,
        movie: state.moviesData.movie
    };
};

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                    {this.props.movies.length ?
                        <div className="row">
                            {sortBy(this.props.movies, i => i[this.props.sortValue]).reverse().map((movie, i) => {
                                if(movie.id !== this.props.movie.id ) {
                                    return <Card movie={movie} key={i}/>
                                }
                            })}
                        </div>
                        :
                        <div className='no-info'>
                            <h3>No movies found</h3>
                        </div>
                    }
            </div>
        )
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(Content);
