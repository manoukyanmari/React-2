import React from 'react';
import { shallow } from 'enzyme';
import CardsFilter from './cards-filter';

describe('CardsFilter', () => {
    it('Adds CardsFilter snapshot testing', () => {
        const component = shallow(<CardsFilter />);

        expect(component).toMatchSnapshot();
    });
});
