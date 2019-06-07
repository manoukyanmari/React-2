import React from 'react';
import Rating from "../rating/rating";

export default class MovieDesc extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-md-4">
                        <img src={this.props.movie.poster_path}/>
                    </div>
                    <div className="col-md-8 text-center">
                        <h5 className='movie-desc-title'>{this.props.movie.title}</h5>
                        <Rating className="movie-desc-rating">Rating: {this.props.movie.vote_average}</Rating>
                        <h5 className='bold margin-r-20'>Release Date: {(new Date(this.props.movie.revenue * 1000)).getFullYear().toString()}</h5>
                        <h5 className='bold'>Duration: {this.props.movie.runtime || 90} min</h5>
                        <div className='row margin-top-20'>
                            <h4>{this.props.movie.overview}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
