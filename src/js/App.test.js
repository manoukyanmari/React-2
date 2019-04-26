import React from "react";
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { Switch } from 'react-router'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import List from "./components/List.jsx";
import Home from "./components/Home.jsx";
import Movie from "./components/Movie.jsx";
import Footer from "./components/Footer.jsx";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from "./store/store";


describe('There is an initial component and error test',()=>{
    let wrapper;
    let componentWrapper;
    let footer;
    let list;
    let home;
    let movie;
    let provider;

    beforeEach(()=>{
        wrapper = shallow(<ErrorBoundary/>)
    });

    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1)
    });

    it('renders correctly the store for provider', () => {
        provider = shallow(<Provider store={store}/>);
        expect(provider.length).toEqual(1)
    });
    it('renders correctly the Movie component', () => {
        movie = shallow(<Movie component={movie}/>);
        expect(movie.length).toEqual(1)
    });
    it('renders correctly Footer component', () => {
        footer = shallow(<Footer/>);
        expect(footer.length).toEqual(1)
    });
    it('renders correctly the List component', () => {
        list = shallow(<List/>);
        expect(list.length).toEqual(1)
    });
    it('renders correctly the Home Component', () => {
        home = shallow(<Home/>);
        expect(home.length).toEqual(1)
    });
    //
    // it('+++ contains header - h2', () => {
    //     expect(componentWrapper.contains(<h2>using React and Redux</h2>)).toBe(true)
    // });
    // it('+++ h2 header value ', () => {
    //     expect(wrapper.find('h2').get(0).props.children).toBe("using React and Redux")
    // });
    // it('+++ contains input1', () => {
    //     expect(wrapper.find('input').at(0)
    //         .equals(<input type="text" placeholder="Input 1" ref="input1"></input>))
    //         .toBe(true)
    // });
    // it('+++ contains input2', () => {
    //     expect(wrapper.find('input').at(1)
    //         .equals(<input type="text" placeholder="Input 2" ref="input2"></input>))
    //         .toBe(true)
    // });
    // it('+++ contains output', () => {
    //     expect(wrapper.find('input[placeholder="Output"]').prop('value')).toEqual(output)
    // });
    // it('+++ contains button with id="add"', () => {
    //     expect(wrapper.find('button#add').type()).toEqual('button')
    // });
    // it('+++ contains button with id="subtract"', () => {
    //     expect(wrapper.find('button#subtract').type()).toEqual('button')
    // });
});