import React from "react";
import List from "./components/List.jsx";
import Form from "./components/Form.jsx";
import ReactDOM from "react-dom";
import Provider from "react-redux/es/components/Provider";
import store from "./store/index";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const App = () => (
    <div className="row mt-5">
        <div className="container">
            <div className="jumbotron">
            <h2>NetFlix roulette</h2>
            <label htmlFor="title">FIND YOUR MOVIE</label>
                <Form />
            </div>
        </div>
        <div className="col-md-4 offset-md-1">
            <List />
        </div>
    </div>
);
ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <App />
        </Provider>
    </ErrorBoundary>,
    document.getElementById("root")
);
export default App;