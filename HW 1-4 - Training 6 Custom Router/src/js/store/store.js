// src/js/store/store.js
import { createStore } from "redux";
import rootReducer from "../reducers/reducer";
import {addMovie} from "../actions/action";

const store = createStore(rootReducer);
store.subscribe(() => console.log('Look ma, Redux!!'));
store.dispatch( addMovie({ title: 'React Redux Tutorial for Beginners', id: 1, src: '../../../src/imgs/machinist.JPG' }));
export default store;