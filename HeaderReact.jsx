import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import States from './components/states/States';
import Example from './components/example/Example';

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