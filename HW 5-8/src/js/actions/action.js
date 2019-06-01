// src/js/actions/action.js
import { ADD_ARTICLE } from "../constants/action-types";
import { REMOVE_ARTICLE } from "../constants/action-types";
export function addArticle(payload) {
    console.log(payload,'saddddad PAYLOAD');
    return { type: ADD_ARTICLE, payload };
}
export function deleteAllArticles() {
    return {type: REMOVE_ARTICLE};
}
