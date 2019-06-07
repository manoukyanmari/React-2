import {ADD_MOVIE, REMOVE_MOVIES, MOVIES_REQUEST_SUCCESS, MOVIE_REQUEST_FAILURE, FIND_MOVIE_SUCCESS} from "../constants/action-types";

const initialState = {
    movies: [],

};

const rootReducer = (state = initialState, action) => {
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
        case ADD_MOVIE:
            return {
                ...state,
                ...action.payload
            };
        case REMOVE_MOVIES:
            return Object.assign({}, state, initialState);
        default:
            return state
    }
}

// function rootReducer(state = initialState, action) {
//     if (action.type === ADD_MOVIE) {
//         return Object.assign({}, state, {
//             movies: state.movies.concat(action.payload)
//         });
//     }
//     if (action.type === REMOVE_MOVIES) {
//         return Object.assign({}, state, initialState);
//     }
//     return state;
// }
export default rootReducer;