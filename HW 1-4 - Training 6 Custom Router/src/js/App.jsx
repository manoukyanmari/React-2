import React, {Component} from "react";
import List from "./components/List.jsx";
import Home from "./components/Home.jsx";
import Movie from "./components/Movie.jsx";
import Footer from "./components/Footer.jsx";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from "./store/store";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { Switch } from 'react-router'

//dumb component
const HomeComponent = props  => (
    <div className="row mt-5">
        <Home/>
        <div className="container">
            <Route exact path="/" Component={List}/>
            <Route path="/movie" Component={Movie}/>
        </div>
    </div>
);

const NotFound = () => (
    <div>
        <h1> 404 Page Not Found </h1>
    </div>
);

const RouterContex = React.createContext();
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {location: window.location};
        this.handleClick = this.handleClick.bind(this);
    }
    state = { location: window.location };

    handleClick = event => {
        event.preventDefault();
        window.history.pushState(null, null, event.target.href);
        this.setState({ location: window.location });
    };

    handlePopState = () => {
        this.setState({ location: window.location });
    };

    componentDidMount() {
        window.addEventListener('popstate', this.handlePopState);
    }
    render() {
        return (
            <RouterContex.Provider value={{ location: this.state.location, handleClick: this.handleClick }}>
                {this.props.children}
            </RouterContex.Provider>
        );
    }
}

const Route = ({ exact, path, Component }) => {
    return (
        <RouterContex.Consumer>
            {context => {
                const location = context.location;
                const matched = exact ? location.pathname === path : location.pathname.startsWith(path);
                if (matched) {
                    return <Component />;
                }
                return null;
            }}
        </RouterContex.Consumer>
    );
};

const Link = ({ to, children }) => {
    return (
        <RouterContex.Consumer>
            {context => {
                return (
                    <a href={to} onClick={context.handleClick}>
                        {children}
                    </a>
                );
            }}
        </RouterContex.Consumer>
    );
};

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <HomeComponent/>
                </div>
            </Router>
        )
    }
}

const routing = (
    <ErrorBoundary>
        <Provider store={store}>
            <div>
                <App/>
                <Footer />
            </div>
        </Provider>
    </ErrorBoundary>
);

ReactDOM.render(routing, document.getElementById("root"));

export default App;