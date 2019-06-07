import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header', () => {
    it('Adds Header snapshot testing', () => {
        const component = shallow(<Header/>);

        expect(component).toMatchSnapshot();
    });
});
