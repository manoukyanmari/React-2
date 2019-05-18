// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../../actions/action";
import {Link} from "react-router-dom";


function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(
            addArticle(article)
        )
    };
}
// smart component
class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('query');

        this.state = {
            query: query? query: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target.value, 'event target value');
        this.setState({ [event.target.id]: event.target.value, query: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { query } = this.state;
        var title = "New Machinist Query";
        this.props.articles = [];
        for (var i = 0; i < 5; i++) {
            const id = uuidv1();
            this.props.addArticle({ query, id, src: '../../../src/imgs/machinist.JPG' });
        }
        console.log(query, 'query');
        this.setState({ query: query });
    }
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
                        <button type="button" id="query" className="btn btn-primary btn-lg float-left margin-for-btn">
                            TITLE
                        </button>
                        <button type="button" id="title" className="btn btn-primary btn-lg float-left margin-for-btn">
                            GENRE
                        </button>
                    </div>
                    <div className="col-md-6 text-right">
                        <button type="submit" className="btn btn-success btn-lg float-right margin-for-btn">
                            <Link to={'/movie-list?query=' + this.state.query}>
                                SEARCH
                            </Link>
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