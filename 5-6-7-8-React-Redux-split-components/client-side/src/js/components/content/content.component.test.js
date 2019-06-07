import React from 'react';
import { shallow } from 'enzyme';
import Content from './content';

describe('Content', () => {
    it('Adds Content snapshot testing', () => {
        const component = shallow(<Content/>);

        expect(component).toMatchSnapshot();
    });
});
