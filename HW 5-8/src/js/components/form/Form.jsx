// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import store from "../../store/store"
import * as actions from "../../actions/action";
import {Link} from "react-router-dom";
import {corsAJAX} from "../../actions/helpers";



const ROOT_URL = "https://reactjs-cdp.herokuapp.com/";


// smart component
class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        //
        this.state = {
            query: ''
        };
        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setRequest = this.setRequest.bind(this);
    }

    onChangeQuery = (event) => {
        this.setState({query: event.target.value});
       // this.setRequest(event.target.value)
    };

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const q = urlParams.get('query');
        this.state = {
            query: q? q : '',
        };
        if(this.state.query) {
            this.setRequest(q);
        }
    }

    setRequest = (val) => {
        this.setState({query: val});

        fetch(`${ROOT_URL}movies?searchBy=genres&search=${val}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        articles: result.data
                    });
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
        this.setRequest(query);

        //
        // //store.dispatch(addArticles(query));
        // corsAJAX(`${ROOT_URL}/search/query=${query}`, 'GET').map(res => res.response.results.filter(content => {
        //     console.log(content, 'sdsd');
        //    // return content
        // }))
        //var title = "New Machinist Query";
        // console.log(this.props, 'dsdsdsd');
        // for (var i = 0; i < 5; i++) {
        //     const id = uuidv1();
        //     this.props.addArticles({  query: query });
        // }
        // console.log(query, 'query');
       // this.setState({ query });
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
                            <Link to={'/movie-list?query=' + this.state.query}>
                                SEARCH
                            </Link>
                        </button>
                    </div>
                </div>
            </form>
                {/*{ this.props.articles.length > 0 ?*/}
                    {/*<Row type={`Results for "${this.state.query}"`}*/}
                         {/*items={this.props.articles} /> : null }*/}
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