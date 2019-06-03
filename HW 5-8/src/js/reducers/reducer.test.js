import React from "react";
import rootReducer from "./reducer";
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import jest from 'jest-mock';
configure({ adapter: new Adapter() });

describe('Reducer Has been run',()=>{
    const initialState = {
        movies: []
    };
    const mockFunction = jest.fn();
    it('renders correctly the Reducer', () => {
        let movies = {movies: initialState.movies};
        expect(rootReducer(initialState, mockFunction)).toEqual(movies);
    })
});

