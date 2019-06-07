import { combineEpics, ofType } from 'redux-observable';

import {
    ADD_MOVIE,
    REMOVE_MOVIES,
    ROOT_URL,
    MOVIES_REQUEST_SUCCESS,
    MOVIE_REQUEST_FAILURE,
    FIND_MOVIE_SUCCESS
} from "../constants/action-types";

import {
    addMovie,
    deleteAllMovies
} from '../actions/action';

export const getMovies = (text, type) => {
    console.log(text,'text');
    console.log(type,'type');
        console.log('mtav');
        fetch(`${ROOT_URL}movies?search=${text}&searchBy=${type}`)
            .then(res => res.json())
            .then( data => {
                mapDispatchToProps(movieRequestSuccess(data));
                console.log(data, 'dataaa');
                //getMovies(data.genres, 'genres');

            });
    };

const mapDispatchToProps = dispatch => {
    return {
        getMovies: (text, type) => {
            dispatch(getMovies(text, type));
        }
    }
};

export const getMovie = (id) => {
    return (dispatch) => {
        fetch(`${ROOT_URL}movies/${id}`)
            .then(res => res.json())
            .then( data => {
                getMovie(data.genres, 'genres')(dispatch);
                dispatch(findMovieSuccess(data));
            });
    };
};

export const movieRequestSuccess = (movies) => ({
    hola: function() {
      console.log(movies, 'movies');
    },
    type: MOVIES_REQUEST_SUCCESS,
    payload: {
        movies: movies.data,
        ...movies
    }
});

export const findMovieSuccess = (movie) => ({
    type: FIND_MOVIE_SUCCESS,
    payload: {
        movie: movie,
        ...movie
    }
});

export const movieRequestFailure = (error) => ({
    type: MOVIE_REQUEST_FAILURE,
    payload: {
        error
    }
});

