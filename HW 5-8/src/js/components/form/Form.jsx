// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import * as actions from "../../actions/action";
import {Link} from "react-router-dom";
import {ROOT_URL} from "../../constants/action-types";


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



// smart component
class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('query');
        var type = 'title';
        this.state = {
            query: query? query: '',
            type: type? type: 'title',
            articles: []
        };
        //this.articles = this.state.articles;
        this.fetchData = this.fetchData.bind(this);
       // this.fetchData(this.state.query, this.state.type);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClickType = this.onClickType.bind(this);
    }

    componentDidMount(){
        this.props.removeArticles();
    }
    handleChange = (event) => {
        this.setState({ query: event.target.value});
    };

    fetchData = (query, type) => {
       // const { query, type } = this.state;
        fetch(`${ROOT_URL}movies?searchBy=${type}&search=${query}`)
            .then(res => res.json())
            .then(
                (result) => {
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
                }
            );
    };

    handleSubmit = event => {
        event.preventDefault();
        const { query, type } = this.state;
        this.fetchData(query, type);
       // this.setState({ articles: []});


    };

    onClickType = (type) => {
        this.setState({type: type, articles: []})
    };

    render() {
        const { query } = this.state;

        return (
            <div>
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
                                onClick={() => this.props.history.push('/search?query=' + this.state.query)}>
                                SEARCH
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;