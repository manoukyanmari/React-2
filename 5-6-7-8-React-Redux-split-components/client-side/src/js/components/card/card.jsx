import React from 'react';
import '../../../style.scss';
import {Link} from "react-router-dom";

export default class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4 col-sm-6">
                <Link to={`/movie/${this.props.movie.id}`}>
                    <img src={this.props.movie.poster_path} />
                    <div>
                        <div className='title'>
                            <h5 className='card-title'>{this.props.movie.title}</h5>
                            <div>{new Date(this.props.movie.release_date).getFullYear()}</div>
                        </div>
                        <div className="genre-container">
                            <h5>{this.props.movie.genres.map((genre, i) => <span key={i}>{genre}, </span>)}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
