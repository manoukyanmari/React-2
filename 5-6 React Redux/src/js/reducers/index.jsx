import { combineReducers } from 'redux';
import moviesData from './movies-reducer';

const rootReducer = combineReducers({
    moviesData,
});

export default rootReducer;
