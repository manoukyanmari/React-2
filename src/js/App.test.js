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
});