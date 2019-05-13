import React from "react";
import {shallow} from "enzyme/build";
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import Form from "./form/Form.jsx";
configure({ adapter: new Adapter() });

describe('Home Component',()=>{
    let form;
    let header;

    it('renders correctly the Home Component', () => {
        form = shallow(<Form/>);
    });

    it('renders correctly the Header for home', () => {
        header = shallow(
            <div className="container">
            <div className="jumbotron">
            <h2>NetFlix roulette</h2>
            <label htmlFor="title">FIND YOUR MOVIE</label>
            <Form />
            </div>
            </div>
        );
        expect(header).toMatchSnapshot();
    });
})