import React, {PureComponent} from 'react';
import Input from "../input";
import Button from "../button/button";
import {getMovies} from "../../../js/actions/movie-action";
import {connect} from "react-redux";
import '../../../style.scss';
import './header.scss'


const mapDispatchToProps = (dispatch) => ({
    runGettingMovieData: (text, type) => dispatch(getMovies(text, type)),
});

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.moviesData.movies
    };
};

class Header extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            searchBy: 'title',
            searchText: '',
        };

        this.handleSearchBy = this.handleSearchBy.bind(this);
        this.search = this.search.bind(this);

        this.handleSearchText = (text) => {
            this.state.searchText = text.trim().toLowerCase();
        };
    }

    componentDidMount() {
        if (this.props.match.url !== '/') {
            const search = this.props.match.params.search.substr(7);
            const type = this.props.match.params.genres.substr(5);
            this.props.runGettingMovieData(search, type)
        }
    }

    handleSearchBy(key) {
        this.setState({searchBy: key});
    };

    search() {
        this.props.history.push(`/search=${this.state.searchText}/type=${this.state.searchBy}`);
        this.props.runGettingMovieData(this.state.searchText, this.state.searchBy)
    }

    handleClick = () => {
        this.props.history.push('/');
    };

    render() {
        return (

            <div className="container">
                <div className="header roulette-background">
                    <h1 className="text-white font-weight-bold margin-bottom-25 margin-left-20">NetFlix roulette</h1>
                    <div className="text-white font-weight-bold margin-bottom-25 margin-left-20">
                        <label htmlFor="title">FIND YOUR MOVIE</label>
                    </div>
                    <div className='container'>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group margin-bottom-50">
                                <Input OnInputChange={this.handleSearchText} searchText={this.state.searchText}
                                       cypressId='search-input' placeholderText='Search'/>
                            </div>
                            <div className="row margin-bottom-25">
                                <div className="col-md-3 text-right margin-top-15">
                                    <h5 className='title'><span className="text-dark bg-white rounded-pill padding-15-25 font-weight-bold">Search by:</span></h5>
                                </div>
                                <div className="col-md-6 text-left">
                                            <span onClick={() => this.handleSearchBy('title')}>
                                                <Button
                                                    className={'btn btn-light ' + (this.state.searchBy === 'title' ? '' : 'gray')}>
                                                    Title
                                                </Button>
                                            </span>
                                    <span onClick={() => this.handleSearchBy('genres')} className="margin-left-10">
                                                <Button
                                                    className={'btn btn-light ' + (this.state.searchBy === 'genres' ? '' : 'gray')}>
                                                    Genre
                                                </Button>
                                            </span>
                                </div>
                                <div className="col-md-3 text-left">
                                    <div onClick={this.search} className='btn btn-light search-btn'>
                                        <Button cypressId='search-button'>Search</Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(Header);
