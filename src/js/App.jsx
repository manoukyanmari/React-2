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
            <Route exact path="/movie" Component={Movie}/>
        </div>
    </div>
);

const NotFound = () => (
    <div>
        <h1> 404 Page Not Found </h1>
    </div>
);

const RouterContext = React.createContext();
const Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: window.location
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = async event =>{
        event.preventDefault();
        window.history.pushState(null, null, event.target.closest('a').href);
        this.setState({ location: window.location });
    };
    handlePopState = () => {
        this.setState({ location: window.location });
    }
    componentDidMount() {
        window.addEventListener('popState', this.handlePopState);
    }
    render() {
        return(
            <RouterContext.Provider value={{location: this.state.location, handleClick: this.handleclick}}>
                {this.props.children}
            </RouterContext.Provider>
        )

    }
}

const Route = ({ path, component }) => {
    return (
        <RouterContext.Consumer>
            {
                context => {
                    const location = context.location;
                    const matched = exact ? location.pathname === path : location.pathname.startsWith(path);
                    if(matched) {
                        return <Component />
                    }
                    return null;
                }
            }
        </RouterContext.Consumer>
    )
}

const link = ({ to, children }) => {
    return (
        <RouterContext.Consumer>
            {
                context => {
                    return (
                        <a href={to} onClick={context.handleClick}>
                            {children}
                        </a>
                    )
                }
            }
        </RouterContext.Consumer>
    )
}

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