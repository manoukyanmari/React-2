// src/js/components/List.jsx
import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
    return { articles: state.articles };
};
const ConnectedList = ({ articles }) => (
    <div className="row mt-5">
        <div className="container">
            {articles.map(el => (
                <div className="col-12 col-sm-6 col-md-4 p-2" key={el.id}>
                    <div className="d-flex flex-column text-center border height100">
                        <div>
                            <img src={el.src}/>
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