// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import store from "../../store/store"
import * as actions from "../../actions/action";
import {Redirect, Route} from "react-router-dom";
import {corsAJAX} from "../../actions/helpers";
import List from "../List.jsx";


const ROOT_URL = "https://reactjs-cdp.herokuapp.com/";


// smart component
class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        //
        console.log(props,'sdsds');

        this.state = {
            query: this.state ? this.state.query : ''
        };
        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setRequest = this.setRequest.bind(this);
    }

    onChangeQuery = (event) => {
        this.setState({query: event.target.value});
    };

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams, 'params');
        const q = urlParams.get('query');
        this.state = {
            query: q? q : '',
        };
       // this.props.history.push('/movie-list?query=' + this.state.query);
    }

    setRequest = (val) => {
        this.props.history.push('/movie-list?query=' + this.state.query);
        console.log(this.state, 'state');
        fetch(`${ROOT_URL}movies?searchBy=genres&search=${val}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        articles: result.data
                    });
                    console.log(this.state, 'ssssstate');

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    };

    handleSubmit = event => {
        event.preventDefault();
        const { query } = this.state;
       console.log(query, 'dsd');
        if(this.state.query) {
            this.setState({query: query});
            this.setRequest(query);
        }
    };

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group text-right">
                    <input
                        type="text"
                        className="form-control"
                        id="query"
                        value={this.state.query}
                        onChange={this.onChangeQuery}/>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <span>SEARCH BY: </span>
                        <button type="button" id="query" className="btn btn-primary btn-lg float-left margin-for-btn">
                            TITLE
                        </button>
                        <button type="button" id="title" className="btn btn-primary btn-lg float-left margin-for-btn">
                            GENRE
                        </button>
                    </div>
                    <div className="col-md-6 text-right">
                        <button type="submit" className="btn btn-success btn-lg float-right margin-for-btn">
                                SEARCH
                        </button>
                    </div>
                </div>
            </form>

            </div>
        );
    }
}


const mapStateToProps = ({ articles }) => {
    console.log(articles);
    return { articles: articles };
};
function mapDispatchToProps(dispatch) {
    return {
        addArticles: articles => dispatch(addArticles(articles))
    };
}
const Form = connect(mapStateToProps, actions)(ConnectedForm);


export default Form;