import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import States from '../states/States';
import Example from '../example/Example';
import {HashRouter, Link, Route} from "react-router-dom";



export default function DynamicView() {
    const [showStates, setShowStates] = useState(false);

    const toggleModel = () => {
        setShowStates((prevShowStates) => !prevShowStates);
    }

    return (
        <div>
            <div>
                <header>
                    <h1>Your Website Name</h1>
                    <HashRouter>

                        <Link to="/states" className="button-link">States </Link>
                        <Link to="/example" className="button-link">Example</Link>
                        <Route path="/states" component={States} />
                        <Route path="/example" component={Example} />
                    </HashRouter>
                </header>
            </div>
        </div>
    )
}