import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button', () => {
    it('Adds Button snapshot testing', () => {
        const component = shallow(<Button />);

        expect(component).toMatchSnapshot();
    });
});
