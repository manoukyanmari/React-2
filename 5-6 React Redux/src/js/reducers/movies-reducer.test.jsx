import * as actions from '../actions/movie-action';
import * as types from '../actions/types';
import {MOVIES_REQUEST_SUCCESS} from "../actions/types";

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const text = 'Finish docs';
        const expectedAction = {
            type: MOVIES_REQUEST_SUCCESS,
            text
        };
        expect(actions.movieRequestSuccess(text)).toEqual(expectedAction)
    })
})
