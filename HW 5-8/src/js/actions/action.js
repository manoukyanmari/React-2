// // src/js/actions/action.js
// import { ADD_ARTICLE } from "../constants/action-types";
// export function addArticle(payload) {
//     return { type: ADD_ARTICLE, payload };
// }

export const selectItem = (item, activeRow, cb) => ({ type: SELECT_ITEM, item, activeRow, cb });

export const returnSelectedItem = (selectedItem, activeRow) =>
    dispatch =>
        dispatch({
            type: RETURN_SELECTED_ITEM,
            selectedItem,
            activeRow
        });

export const loadContent = () =>
    dispatch =>
        dispatch({
            type: LOAD_CONTENT,
            loading: true
        });

export const searchContent = query => ({ type: SEARCH_CONTENT, query });

export const searchCancelled = () =>
    dispatch =>
        dispatch({
            type: SEARCH_CANCELLED,
            articles: []
        });

export const returnFoundArticles = articles =>
    dispatch =>
        dispatch({
            type: RETURN_SEARCH_CONTENT,
            articles
        });

export const addArticles = articles =>
    dispatch =>
        dispatch({
            type: ADD_ARTICLE,
            articles
        });

export const fetchNextContent = () => ({ type: FETCH_CONTENT });

export const returnNextContent = content =>
    dispatch =>
        dispatch({
            type: RETURN_CONTENT,
            content
        });