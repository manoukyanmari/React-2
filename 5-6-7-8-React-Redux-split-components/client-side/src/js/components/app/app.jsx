import React from 'react';
import Header from '../header/header';
import HeaderDetailed from '../header-detailed/header';
import Footer from '../footer/footer';
import '../../../style.scss';
import Content from "../content/content";
import CardsFilter from "../cards-filter/cards-filter";
import Provider from "react-redux/es/components/Provider";
import thunk from "redux-thunk";
import reducers from '../../reducers';
// import {createBrowserHistory} from 'history';
import {withRouter , Route, NavLink, Switch} from 'react-router-dom';
// import {withRouter} from 'react-router';
import NotFound from "../NotFound/not-found";


// const history = createBrowserHistory();

// export default class App extends React.Component {
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortValue: 'release_date', // vote_average
        };
    }

    setSortValue = (sortValue) => {
        this.setState({
            sortValue,
        })
    };

    render() {
        const {
            sortValue,
        } = this.state;

        return (
            <div className='app'>
                <Switch>
                    <Route exact path="/movie/:id" component={HeaderDetailed} />
                    <Route path="/:search?/:genres?" component={Header} />
                    <Route component={NotFound} />
                </Switch>
                <CardsFilter sortValue={sortValue} setSortValue={this.setSortValue}/>
                <Content sortValue={sortValue}/>
                <Footer/>
            </div>

        )
    }
}

export default withRouter(App);
