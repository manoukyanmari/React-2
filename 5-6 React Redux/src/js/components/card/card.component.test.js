import React from 'react';
import { shallow } from 'enzyme';
import Card from './card';

describe('Card', () => {
    it('Adds Card snapshot testing', () => {
        const component = shallow(<Card />);

        expect(component).toMatchSnapshot();
    });
});
