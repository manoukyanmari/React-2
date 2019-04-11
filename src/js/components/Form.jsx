// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}
class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id, src: '../../../src/imgs/machinist.JPG' });
        this.setState({ title: "" });
    }
    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group text-right">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}/>
                </div>
                <div>
                    <span>SEARCH BY: </span>
                    <button type="submit" id="title" className="btn btn-primary btn-lg float-left margin-for-btn">
                        TITLE
                    </button>
                    <button type="submit" id="title" className="btn btn-primary btn-lg float-left margin-for-btn">
                        GENRE
                    </button>
                    <button type="submit" className="btn btn-success btn-lg float-right margin-for-btn">
                        SAVE
                    </button>
                </div>
            </form>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;