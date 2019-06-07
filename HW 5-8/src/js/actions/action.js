// src/js/actions/action.js
import {ADD_MOVIE, MOVIES_REQUEST_SUCCESS, FIND_MOVIE_SUCCESS, REMOVE_MOVIES} from "../constants/action-types";

export function addMovie(payload) {
    return { type: ADD_MOVIE, payload };
}
export function getMoviesData(payload) {
    return { type: MOVIES_REQUEST_SUCCESS, payload };
}
export function getMovieData(payload) {
    return { type: FIND_MOVIE_SUCCESS, payload };
}
export function deleteAllMovies() {
    return {type: REMOVE_MOVIES,};
}
