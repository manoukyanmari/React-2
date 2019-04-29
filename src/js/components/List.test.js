import React from "react";
import List from "./List.jsx";
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe('Render components',()=>{
    let list;
    beforeEach(()=>{
        list = shallow(<List />);
        console.log(list, 'list');
    });

    it('+++ render the DUMB component', () => {
        expect(list.length).toEqual(1)
    });
    //
    // it('+++ contains button with id="add"', () => {
    //     let clickFn = function() {
    //         window.location.href = "movie";
    //     };
    //     expect(list.children('a').prop('onClick')).toEqual(clickFn);
    // });

});