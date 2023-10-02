import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter, Route, Link} from "react-router-dom";
import States from './components/states/States';
import Example from './components/example/Example';
import Header from './components/header/Header';
import './p5styles.css';

ReactDOM.render(
    <Header />,
    document.getElementById('reactheader'),
);

ReactDOM.render(
    <DynamicView/>,
    document.getElementById('dynamic-react'),
);

export default function DynamicView() {
    return (
        <div>
            <HashRouter>
                <Link to="/states" className="button-link">States </Link>
                <Link to="/example" className="button-link">Example</Link>
                <Route path="/states" component={States}/>
                <Route path="/example" component={Example}/>
            </HashRouter>
        </div>
    );
}