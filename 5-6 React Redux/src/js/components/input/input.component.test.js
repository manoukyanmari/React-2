import React from 'react';
import { shallow } from 'enzyme';
import Input from '.';

describe('Input', () => {
    it('Adds Input snapshot testing', () => {
        const component = shallow(<Input/>);

        expect(component).toMatchSnapshot();
    });
});
