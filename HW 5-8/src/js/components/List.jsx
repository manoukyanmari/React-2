// src/js/components/List.jsx
import React, {Component} from "react";
import { connect } from "react-redux";
import 'babel-polyfill';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Movie from "./Movie.jsx";
import Root from "./../App.jsx";

const mapStateToProps = state => {
    console.log(state.articles, 'sdsdsdsdsd MARIII');
    return {
        articles: state.articles
    };
};


const imgStyle = {
    maxWidth: '100%'
};
//dumb component
class List extends Component {
    constructor(props) {
        super(props);
       // this.setState({articles: []});
        console.log(props,'aaaa');
  //      this.componentDidMount = this.componentDidMount.bind(this);
     //   this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    };

    // componentDidMount() {
    //     this.setState({articles: []});
    //     setInterval(() => {
    //         this.setState(() => {
    //             this.shouldComponentUpdate();
    //             console.log('setting state');
    //             return { unseen: "does not display" }
    //         });
    //     }, 1000);
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     if(this.props) {
    //         console.log(nextProps, 'sdsdsdsdsd MMMAAAAYOOO');
    //         if (this.props.number === nextProps.number) {
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     }
    // }


    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps, 'sdsdssd MARRRRRRR');
    //     this.setState({
    //         articles: [],
    //
    //     });
    //
    // }

    render() {
            const ConnectedList = ({ articles = [] }) => (
                <div className="row mt-5">
                    <div className="container">
                        <Route path={this.props.match ? this.props.match.url + '/movie/:id' : ''} component={Movie}/>
                        {articles.map(el => (
                            <div className="col-2 col-sm-4 col-md-3 p-2" key={el.id}>
                                <div className="text-center border height100">
                                    <div>
                                        <Link to={this.props.match.url + '/movie/' + el.id}>
                                            <img style={imgStyle} src={el.poster_path}/>
                                        </Link>
                                    </div>
                                    <h5>{el.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            );
            const ListComponent = connect(mapStateToProps)(ConnectedList);
            return (
                    <ListComponent/>
                )

    }

}


export default List;

