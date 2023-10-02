import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Example from './components/example/Example';
import Header from './components/header/Header';

ReactDOM.render(
    <Header />,
    document.getElementById('reactheader'),
);

ReactDOM.render(
  <Example />,
  document.getElementById('reactapp'),
);
