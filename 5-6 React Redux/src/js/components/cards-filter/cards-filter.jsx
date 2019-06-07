import React from 'react';
import '../../../style.scss';
import {connect} from "react-redux";
import Button from "../button/button";

class CardsFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRating: 'release_date',
        }
    }

    handleSortChange = (value) => {
        this.setState({selectedRating: value});
        this.props.setSortValue(value);
    };

    render() {
        return (
            <div className="margin-bottom-25">
                <div className='container text-center'>
                    <div>
                        {this.props.movies.length ?
                            <h6>{this.props.movies.filter((movie) => movie.id !== this.props.movie.id).length} movies found</h6>
                            :
                            <h6>Movies by drama genre</h6>
                        }
                        {this.props.movies.length ?
                            <div className="text-center">
                                <span><b>Sort By: </b></span>
                                <Button value='release_date' onSort={this.handleSortChange}
                                        className={'sort-by ' + (this.state.selectedRating === 'release_date' ? 'btn-primary' : 'btn-secondary')}>
                                    date
                                </Button>
                                <Button value='vote_average' onSort={this.handleSortChange}
                                        className={'margin-left-10 sort-by ' + (this.state.selectedRating === 'vote_average' ? 'btn-primary' : 'btn-secondary')}>
                                    rating
                                </Button>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.moviesData.movies,
        movie: state.moviesData.movie
    };
};

export default connect(mapStateToProps,
    null)(CardsFilter);
