import React from 'react';
import { shallow } from 'enzyme';
import Rating from './rating';

describe('Rating', () => {
    it('Adds Rating snapshot testing', () => {
        const component = shallow(<Rating/>);

        expect(component).toMatchSnapshot();
    });
});
