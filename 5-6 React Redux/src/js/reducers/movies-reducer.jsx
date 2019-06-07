import {MOVIES_REQUEST_SUCCESS, MOVIE_REQUEST_FAILURE, FIND_MOVIE_SUCCESS} from "../actions/types";

export default (state = {
    movies: [],
    movie: {}
}, action) => {
    switch (action.type) {
        case FIND_MOVIE_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case MOVIES_REQUEST_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case MOVIE_REQUEST_FAILURE:
            return {
                ...state,
                ...action.payload.error
            };
        default:
            return state
    }
}
