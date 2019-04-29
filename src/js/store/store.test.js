import React from "react";
import store from "./store";
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import jest from 'jest-mock';
import {addArticle} from "../actions/action";
configure({ adapter: new Adapter() });
import rootReducer from "../reducers/reducer";
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
export function getDueDates() {
    return dispatch => {
        console.log("IN ACTION");
        fetchDueDates().done(
            dueDates => dispatch(getDueDatesOptimistic(dueDates.entity._embedded.dueDates))
        )
    };
}

describe('Store Has been dispatched',()=>{
    it('Store dispatching', () => {
        let attrs = {
            title: 'React Redux Tutorial for Beginners',
            id: 1,
            src: '../../../src/imgs/machinist.JPG'
        };
       // let type = 'ADD_ARTICLE';
       // let payload = {"payload": "type", "type": type};
        let renderingAttributes = [{ title: attrs.title, id: attrs.id, src: attrs.src }];
        const store = createStore(rootReducer,
            compose(applyMiddleware(thunk))
        );
        store().done(
            renderingAttributes => store.dispatch(addArticle).then(() => {
                    expect(store).toEqual(renderingAttributes)
                })
        );
        // return store.dispatch(addArticle(rootReducer,
        //             compose(applyMiddleware(thunk))
        //          )).then(() => {
        //             expect(store).toEqual(renderingAttributes)
        //          })
        })
});


