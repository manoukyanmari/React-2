// src/js/actions/action.js
import { ADD_ARTICLE } from "../constants/action-types";
import { REMOVE_ARTICLE } from "../constants/action-types";
export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}
export function deleteAllArticles() {
    return {type: REMOVE_ARTICLE,};
}
