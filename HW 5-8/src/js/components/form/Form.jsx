// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import * as actions from "../../actions/action";
import {Link} from "react-router-dom";


function mapDispatchToProps(dispatch) {
    return {
        addArticles: article => dispatch(
            actions.addArticle(article)
        ),
        removeArticles: () => dispatch(
            actions.deleteAllArticles()
        )
    };
}


const ROOT_URL = "https://reactjs-cdp.herokuapp.com/";

// smart component
class ConnectedForm extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps, 'sdsdssd MARRRRRRR');
        this.setState({
            articles: [],

        });
    }
    constructor(props) {
        super(props);
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('query');
        var type = 'genres';
        this.state = {
            query: query? query: '',
            type: type? type: 'title'
        };
        console.log(this.state);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClickType = this.onClickType.bind(this);
    }

    handleChange = (event) => {
        this.setState({ query: event.target.value});
    };


    handleSubmit = event => {

        event.preventDefault();
        const { query, type } = this.state;
        // this.setState({
        //     articles: []
        // });

        console.log(this.state.articles,'dfsdf');
        fetch(`${ROOT_URL}movies?searchBy=${type}&search=${query}`)
            .then(res => res.json())
            .then(
                (result) => {
                    // var arts = this.state.articles;
                    //                     // const { arts } = this.props;
                    console.log(this.state, 'ssssstate');
                    this.state.articles = [];
                    this.setState({
                        articles: result.data
                    });

                    //this.props.removeArticles();
                    console.log(this.state.articles, 'statekjkjkj');
                    this.setState({ state: this.state });
                    console.log(this.props, 'propsdfdf');
                    for (var i = 0; i < this.state.articles.length; i++) {
                        console.log(this.state, 'my state find f');
                        this.props.addArticles(this.state.articles[i]);
                    }

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        console.log(query, 'query');
        this.setState({ query: query });
    };

    onClickType = (type) => {
        this.setState({type: type, articles: []})
    };

    render() {
        const { query } = this.state;
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group text-right">
                    <input
                        type="text"
                        className="form-control"
                        id="query"
                        value={query}
                        onChange={this.handleChange}/>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <span>SEARCH BY: </span>
                        <button type="button" id="query" className="btn btn-primary btn-lg float-left margin-for-btn" onClick={() => this.onClickType('title')}>
                            TITLE
                        </button>
                        <button type="button" id="title" className="btn btn-primary btn-lg float-left margin-for-btn" onClick={() => this.onClickType('genres')}>
                            GENRE
                        </button>
                    </div>
                    <div className="col-md-6 text-right">
                        <button type="submit" className="btn btn-success btn-lg float-right margin-for-btn"
                            onClick={() => this.props.history.push('/movie-list?query=' + this.state.query)}>
                            SEARCH
                        </button>
                    </div>
                </div>
            </form>
                {/*{ this.props.searchResults.length > 0 ? <Row type={`Results for "${this.state.query}"`} items={this.props.searchResults} /> : null }*/}

            </div>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;