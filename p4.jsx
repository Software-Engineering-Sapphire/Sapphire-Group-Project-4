import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import States from './components/states/States';
import Example from './components/example/Example';
import './p5styles.css';

ReactDOM.render(
    <DynamicView/>,
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
            <button onClick={() => {
                toggleModel()
            }}>
                {!showStates && 'Show States'}
                {showStates && 'Show Example'}
            </button>
            {!showStates && <Example/>}
            {showStates && <States/>}
        </div>
    )
}