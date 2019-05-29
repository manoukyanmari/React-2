import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './appliedActions';
import rootReducer from '../reducers/reducer';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
 const store = createStore(
     rootReducer,
     applyMiddleware(epicMiddleware)
 );

 epicMiddleware.run(rootEpic);

 return store;
}