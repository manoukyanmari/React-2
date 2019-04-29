// src/js/components/List.jsx
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const mapStateToProps = state => {
    return {
        articles: state.articles,
    };
};
var onClick = function() {
    window.location.href = "movie";
};

//dumb component
const ConnectedList = ({ articles }) => (
    <div className="row mt-5">
        <div className="container">
            {articles.map(el => (
                <div className="col-12 col-sm-4 col-md-3 p-2" key={el.id}>
                    <div className="text-center border height100">
                        <div>
                            <a type="button" onClick={onClick}>
                            <img src={el.src}/>
                            </a>
                        </div>
                        <h5>{el.title}</h5>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;

