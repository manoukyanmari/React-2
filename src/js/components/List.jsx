// src/js/components/List.jsx
import React, {Component} from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};



//dumb component
class List extends Component {
    state = {location: window.location};
    componentDidUpdate(prevProps){
        console.log(window.location,'sss');
        this.setState({
            location: window.location
        });
    }
    handleClick = event => {
        event.preventDefault();
        console.log(event.target.closest('a').href, 'ddddrer');
        window.history.pushState(null, null, event.target.closest('a').href);
        console.log(window.location, 'window.location');
        setTimeout(() => {this.setState({ location: window.location }, () => {
            console.log(this.state.location.href, 'dealersOverallTotal1');
        })}, 10);
    };
    render() {
        const {location} = this.state;
        const ConnectedList = ({ articles }) => (
            <div className="row mt-5">
                <div className="container">
                    {articles.map(el => (
                        <div className="col-12 col-sm-4 col-md-3 p-2" key={el.id}>
                            <div className="text-center border height100">
                                <div>
                                    <a href="/movie" onClick={this.handleClick}>
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
        const ListComponent = connect(mapStateToProps)(ConnectedList);
        return(
            <ListComponent/>
        )
    }



}


export default List;

