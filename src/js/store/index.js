// src/js/store/index.js
import { createStore } from "redux";
import rootReducer from "../reducers/index";
import {addArticle} from "../actions/index";
const store = createStore(rootReducer);
store.subscribe(() => console.log('Look ma, Redux!!'));
store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
export default store;