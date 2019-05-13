import React from "react";
import Form from "./form/Form.jsx";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                <h2>NetFlix roulette</h2>
                <label htmlFor="title">FIND YOUR MOVIE</label>
                    <Form />
                </div>
            </div>
        )
    }
}
export default Home;