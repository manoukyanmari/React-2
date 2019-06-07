import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

describe('Footer', () => {
    it('Adds Footer snapshot testing', () => {
        const component = shallow(<Footer/>);

        expect(component).toMatchSnapshot();
    });
});
