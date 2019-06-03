import { ADD_MOVIE } from "../constants/action-types";
const initialState = {
    movies: []
};
function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE) {
        return Object.assign({}, state, {
            movies: state.movies.concat(action.payload)
        });
    }
    return state;
}
export default rootReducer;