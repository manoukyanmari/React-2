import { Observable } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { corsAJAX } from '../actions/helpers';
import { mergeMap, flatMap } from 'rxjs/operators';


import {
    FETCH_CONTENT,
    SELECT_ITEM,
    SEARCH_CONTENT,
    SEARCH_ERROR,
    ADD_ARTICLE,
    SEARCH_CANCELLED
} from "../constants/action-types";

import {
    returnSelectedItem,
    returnFoundArticles,
    returnNextContent,
    addArticles,
    fetchNextContent
} from '../actions/action';

const ROOT_URL = "reactjs-cdp.herokuapp.com/";


const handleSearchEpic = action$ =>
    action$.ofType(ADD_ARTICLE)
        .pipe(mergeMap(action =>
            corsAJAX(`${ROOT_URL}/search/query=${action.query}`, 'GET')
                .map(res => res.response.results.filter(content => {
                    return content.media_type !== 'person';
                }))
                .map(res => returnSearchContent(res))
                .takeUntil(action$.ofType(SEARCH_CANCELLED))
                .catch(err => Observable.of({
                    type: SEARCH_ERROR,
                    payload: err.xhr.response,
                    error: true
                }))
        ));

const selectItemEpic = action$ =>
    action$.ofType(SELECT_ITEM)
        .pipe(mergeMap(action =>
            Observable.forkJoin(
                corsAJAX(`${ROOT_URL}/${action.item.type}/${action.item.id}?api_key=${API_KEY}&language=en-US`, 'GET'),
                corsAJAX(`${ROOT_URL}/${action.item.type}/${action.item.id}/videos?api_key=${API_KEY}&language=en-US`, 'GET')
            )
                .map(res => returnSelectedItem({ ...res[0].response, ...res[1].response }, action.activeRow))
                .do(() => action.cb())
                .takeUntil(action$.ofType(SELECT_ITEM))
        ));

const topChartsCategories = ['movie/popular', 'movie/upcoming', 'tv/popular', 'tv/top_rated'];
const genreNames = { action: 28, comedy: 35, drama: 18, horror: 27, 'science fiction': 878, thriller: 53, mystery: 9648 };

// fetchContentEpic helper function
const buildUrls = () => {
    let promises = [];
    let tags = [];

    topChartsCategories.forEach(category => {
        promises.push(corsAJAX(`${ROOT_URL}/${category}?api_key=${API_KEY}&language=en-US&page=1`, 'GET'));
        tags.push(category);
    });

    for (let val in genreNames) {
        promises.push(corsAJAX(`${ROOT_URL}/discover/movie?api_key=${API_KEY}&language=en-US&1sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreNames[val]}`, 'GET'));
        tags.push(val);
    };
    return [ promises, tags ];
}

const fetchNextContentEpic = action$ =>
	action$.ofType(FETCH_CONTENT)
        .pipe(flatMap(action =>
			Observable.forkJoin(buildUrls()[0])
			.map(res => {
				let tags = buildUrls()[1];
				let filteredResults = {}
				res.forEach((el, idx) => {
					filteredResults[tags[idx]] = el.response.results;
				});
				return filteredResults;
			})
			.map(filteredResults => returnNextContent(filteredResults))
		));

export const rootEpic = combineEpics(
    handleSearchEpic,
    selectItemEpic,
    fetchNextContentEpic
);
