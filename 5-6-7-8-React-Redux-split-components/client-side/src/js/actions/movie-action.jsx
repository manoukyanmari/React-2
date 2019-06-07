import {
    MOVIES_REQUEST_SUCCESS,
    MOVIE_REQUEST_FAILURE, FIND_MOVIE_SUCCESS,
    REQUEST_URI
} from "./types";
import axios from 'axios';

export const getMovies = (text, type) => {
    return (dispatch) => {
        axios.get(`${REQUEST_URI}movies?search=${text}&searchBy=${type}`)
            .then( data => {
                console.log(data, 'datattaat');
                dispatch(movieRequestSuccess(data.data))
            });
    };
};

export const getMovie = (id) => {
    return (dispatch) => {
        axios.get(`${REQUEST_URI}movies/${id}`)
            .then( data => {
                console.log(data, 'data get Mvie');
                getMovies(data.data.genres[0], 'genres')(dispatch);
                dispatch(findMovieSuccess(data.data));
            });
    };
};

const movieRequestSuccess = (movies) => ({
    type: MOVIES_REQUEST_SUCCESS,
    payload: {
        movies: movies.data,
        ...movies
    }
});

const findMovieSuccess = (movie) => ({
    type: FIND_MOVIE_SUCCESS,
    payload: {
        movie: movie,
        ...movie
    }
});

const movieRequestFailure = (error) => ({
    type: MOVIE_REQUEST_FAILURE,
    payload: {
        error
    }
});
