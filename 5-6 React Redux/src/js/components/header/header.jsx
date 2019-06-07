import React, {PureComponent} from 'react';
import Input from "../input";
import Button from "../button/button";
import {getMovies} from "../../../js/actions/movie-action";
import {connect} from "react-redux";
import '../../../style.scss';


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
        if(this.props.match.url !== '/') {
            const search = this.props.match.params.search.substr(7);
            const type = this.props.match.params.genres.substr(5);
            this.props.runGettingMovieData(search, type)
        }
    }

    handleSearchBy(key) {
        this.setState({searchBy : key});
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
                    <h2>NetFlix roulette</h2>
                            <label htmlFor="title">FIND YOUR MOVIE</label>
                            <form onSubmit={this.handleSubmit}>
                                <Input OnInputChange={this.handleSearchText} searchText={this.state.searchText}
                                       cypressId='search-input' placeholderText='Search'/>
                                <div className='container'>
                                    <span><h3 className='title'>Search by</h3></span>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <span onClick={() => this.handleSearchBy('title')}>
                                                <Button className={(this.state.searchBy === 'title' ? '' : 'gray')}>
                                                    Title
                                                </Button>
                                            </span>
                                       </div>
                                        <div className="col-md-6">
                                            <span onClick={() => this.handleSearchBy('genres')}>
                                                <Button className={(this.state.searchBy === 'genres' ? '' : 'gray')}>
                                                    Genre
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div onClick={this.search} className='search-btn'>
                                        <Button cypressId='search-button'>Search</Button>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
        );
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(Header);
