// src/js/store/store.js
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './appliedActions';
import thunkMiddleware from "redux-thunk";
import thunk from "redux-thunk";
import loggerMiddleware from "redux-logger";
import rootReducer from "../reducers/reducer";
import { devTools, persistState } from 'redux-devtools';

const store = createStore(rootReducer);
store.subscribe(() => console.log('Look ma, Redux!!'));
// store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1, src: '../../../src/imgs/machinist.JPG' }));
export default store;
//
// const finalCreateStore = compose(
//     applyMiddleware(thunkMiddleware),
//     devTools(),
//     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
// )(createStore);
//
// //store.subscribe(() => console.log('Look ma, Redux!!'));
// //store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1, src: '../../../src/imgs/machinist.JPG' }));
// export default store;