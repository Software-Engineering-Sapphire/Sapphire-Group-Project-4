import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <h2>Header</h2>
                    <img src="/components/header/happyguy.jpeg" alt="happy3guy"></img>
                </header>
            </div>
        );
    }
}
// export default function DynamicView() {
//
//     return (
//         <div>
//             <header>
//                 <h2>Header</h2>
//                 <img src="/components/header/happyguy.jpeg" alt="happy3guy"></img>
//             </header>
//         </div>
//     )
// }