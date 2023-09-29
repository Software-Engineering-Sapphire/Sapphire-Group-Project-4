import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import States from '../states/States';
import Example from '../example/Example';



export default function DynamicView() {
    const [showStates, setShowStates] = useState(false);

    const toggleModel = () => {
        setShowStates((prevShowStates) => !prevShowStates);
    }

    return (
        <div>
            return (
            <div>
                <header>
                    <h1>Your Website Name</h1>
                    {/* Add navigation links or other header content here */}
                </header>
            </div>
            );
        </div>
    )
}