import React from "react";
import {shallow, mount} from "enzyme/build";
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
import ErrorBoundary from "./ErrorBoundary.jsx";

describe('<ErrorBoundary> window',()=> {
    it('should match the snapshot', () => {
        const tree = renderer.create(<ErrorBoundary>Test</ErrorBoundary> ).toJSON()
        expect(tree).toMatchSnapshot()
    });

    it('displays error message on error generated by child', () => {
        const wrapper = mount(
            <ErrorBoundary >
            <h1>Uh oh! Something went wrong.</h1>
            </ErrorBoundary>
    )
        console.log(wrapper.debug())
        expect(wrapper).toMatchSnapshot();
    })
});