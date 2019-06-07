// src/js/store/store.js
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/reducer';
import thunk from 'redux-thunk';
import {addMovie} from "../actions/action";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
// store.subscribe(() => console.log('Look ma, Redux!!'));
// store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1, src: '../../../src/imgs/machinist.JPG' }));

export default store;