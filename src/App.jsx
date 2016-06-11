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

const App = (props) => {
    return (
        <div>
            <p>App rendered.</p>
            {props.children}
        </div>
    );
};

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>

        </Route>
    </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
