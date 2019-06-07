import React from 'react';
import { shallow } from 'enzyme';
import MovieDesc from './movie-desc';

describe('MovieDesc', () => {
    it('Adds MovieDesc snapshot testing', () => {
        const component = shallow(<MovieDesc/>);

        expect(component).toMatchSnapshot();
    });
});
