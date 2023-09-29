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
                    <h1>Header</h1>
                    
                </header>
            </div>
        </div>
    )
}