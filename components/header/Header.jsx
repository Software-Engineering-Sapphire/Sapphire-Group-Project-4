import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <h2>Header&nbsp;<img src="/components/header/happyguy.jpeg" alt="happy3guy"></img></h2>

                </header>
            </div>
        );
    }
}
