// import { ADD_ARTICLE } from "../constants/action-types";

// function rootReducer(state = initialState, action) {
//     if (action.type === ADD_ARTICLE) {
//
//     }
//     return state;
// }

import * as ACTIONS from "../constants/action-types";

console.log(ACTIONS, 'sdd');
const initialState = {
    content: {},
    loading: true,
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.RETURN_CONTENT:
            return { ...state, content: action.content, loading: false };

        case ACTIONS.RETURN_SELECTED_ITEM:
            return { ...state, selectedItem: action.selectedItem, activeRow: action.activeRow };

        case ACTIONS.LOAD_CONTENT:
            return { ...state, loading: true };

        case ACTIONS.RETURN_SEARCH_CONTENT:
            return { ...state, articles: action.articles };

        case ACTIONS.SEARCH_CANCELLED:
            return { ...state, articles: [] };

        case ACTIONS.SEARCH_ERROR:
            return { ...state, error: action.error };

        case ACTIONS.ADD_ARTICLE:
            return { ...state, articles: state.articles.concat(action.payload) };

        default:
            return state;
    }

};

export default rootReducer;
