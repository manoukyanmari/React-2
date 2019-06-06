import { Observable } from 'rxjs'
import { combineEpics, ofType } from 'redux-observable';
import { corsAJAX } from '../actions/helpers';
import { mergeMap, flatMap } from 'rxjs/operators';


import {
    ADD_ARTICLE,
    REMOVE_ARTICLE
} from "../constants/action-types";

import {
    addArticles,
    deleteAllArticles
} from '../actions/action';

const ROOT_URL = "reactjs-cdp.herokuapp.com/";

const handleSearchEpic = action$ =>
    action$.ofType(ADD_ARTICLE)
        .pipe(mergeMap(action =>
            corsAJAX(`${ROOT_URL}movies?searchBy=${type}&search=${query}`, 'GET')
                .map(res =>   (result) => {

                        console.log(action.item, 'item');
                        console.log(result, 'result');
                        this.props.removeArticles();
                        result.data.map((item, i) => {
                            // Return the element. Also pass key
                            this.props.addArticles(item);
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    })
        ));



export const rootEpic = combineEpics(
    handleSearchEpic
);