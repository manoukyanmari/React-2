import React, {PureComponent} from 'react';
import Button from "../button/button";
import MovieDesc from "../movie-desc/movie-desc";
import {getMovie} from "../../../js/actions/movie-action";
import {connect} from "react-redux";
import '../../../style.scss';
import '../header/header.scss'

class HeaderDetailed extends PureComponent {

    componentDidMount() {
        this.props.getMovie(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getMovie(this.props.match.params.id);
            window.scrollTo(0, 0);
        }
    }

    handleClick = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div className='header'>
                <div className='container margin-top-20'>
                    <div className="row text-center">
                        <div className="col-md-6">
                            <h3>Netflix roulette</h3>
                        </div>
                        <div className="col-md-6 text-right">
                            <Button gotToHomepage={this.handleClick} className='btn-outline-dark'>
                                Search
                            </Button>
                        </div>
                    </div>
                    <div>
                        <MovieDesc movie={this.props.movie}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getMovie: (id) => dispatch(getMovie(id)),
});

const mapStateToProps = (state, ownProps) => {
    return {
        movie: state.moviesData.movie
    };
};

export default connect(mapStateToProps,
    mapDispatchToProps)(HeaderDetailed);
