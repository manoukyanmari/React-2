import React from "react";
import {shallow} from "enzyme/build";
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
import Footer from "./Footer.jsx";

describe('Footer Component',()=>{
    it('renders correctly the footer', () => {
        let footer = shallow(
            <section id="footer" className="footer">
            <div className="container">
            <div className="row text-sm-left text-md-left">
            <div>
            <h6>Footer Information</h6>
            </div>
            </div>
            </div>
            </section>
        );
        expect(footer).toMatchSnapshot();
    });
});