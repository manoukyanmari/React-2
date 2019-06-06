import React, {Component} from "react";
import {ROOT_URL} from "../constants/action-types";
import Moment from 'moment';

const marginStyle = {
    marginTop: '30px'
};

const imgStyle = {
    maxWidth: '80%'
};

class Movie extends Component {
    // componentDidMount() {
    //     console.log(this.props);
    //     const { match: { params } } = this.props;
    //
    //     axios.get(`/api/users/${params.id}`)
    //         .then(({ data: movie }) => {
    //             console.log('user', movie);
    //
    //             this.setState({ movie });
    //         });
    // }
    constructor(props) {
        super(props);
            this.state = {movie: {}};
            fetch(`${ROOT_URL}movies/${props.match.params.id}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({movie:result});

                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                );
    };

    render() {
        const {movie} = this.state;
        return (
            <div className="container">
                <div className="jumbotron col-md-12">
                    <div className="col-md-4">
                        <img style={imgStyle} src={movie.poster_path}/>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <h2>{movie.title}</h2>
                            <div>
                                <span>Genre: </span>
                                <label htmlFor="title">
                                    {movie.genres? movie.genres.map(function(name, index){
                                        return <span key={ index }>{name}, </span>;
                                    }) : ''}
                                    </label>
                            </div>
                            <div className="row">
                                <div className="col-md-3 text-left">{Moment(movie.release_date).format('YYYY-MM-DD')}</div>
                                <div className="col-md-3 text-right">{movie.runtime}</div>
                            </div>
                        </div>
                        <div className="row" style={marginStyle}>
                            {movie.overview}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Movie;