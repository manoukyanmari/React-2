import React from "react";
import {addArticle} from "../actions/action";
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });


describe('Action Has been done',()=>{
    it('renders correctly the Action', () => {
        let type = 'ADD_ARTICLE';
        let payload = {"payload": "type", "type": type};
        expect(addArticle("type")).toEqual(payload);
    })
});



