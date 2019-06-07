import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('App', () => {
    it('Adds App snapshot testing', () => {
        const component = shallow(<App />);

        expect(component).toMatchSnapshot();
    });
});