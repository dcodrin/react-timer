import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

//Load foundation
//use css! loader to load css
//use style! loader to inject css into html
import 'style!css!foundation-sites/dist/foundation.min.css';

//Load custom css using webpack aliases
//Notice the usage of sass! loader
import 'style!css!sass!applicationStyles';

//Launch foundation
$(document).foundation();


//App components
import Navigation from 'Navigation';
import Timer from 'Timer';
import Countdown from 'Countdown';

const App = (props) => {
    return (
        <div>
            <Navigation />
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Timer} />
            <Route path="countdown" component={Countdown} />
        </Route>
    </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
