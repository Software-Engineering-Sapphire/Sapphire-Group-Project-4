import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import States from './components/states/States';
import Example from './components/example/Example';
import { HashRouter, Route, Link } from "react-router-dom";
import './p5styles.css';

ReactDOM.render(
    <DynamicView />,
    document.getElementById('dynamic-react'),
);

export default function DynamicView() {
    const [showStates, setShowStates] = useState(false);

    const toggleModel = () => {
        setShowStates((prevShowStates) => !prevShowStates);
    }

    return (
        <div>

        <Header/>
            <HashRouter>

                <Link to="/states" className="button-link">States </Link>
                <Link to="/example" className="button-link">Example</Link>
                <Route path="/states" component={States} />
                <Route path="/example" component={Example} />
            </HashRouter>
        </div>

    )
}