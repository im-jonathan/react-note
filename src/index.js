import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Grid from './components/Grid';
import * as serviceWorker from './serviceWorker';
import './css/style.css';

ReactDOM.render(<Form />, document.getElementById('form'));
ReactDOM.render(<Grid />, document.getElementById('grid'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
