import React from 'react';
import {Link, IndexLink} from 'react-router';

export default (props) => {
    return (
        <div>
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer</li>
                        <li><IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
                        <li><Link to="countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Time some stuff</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
