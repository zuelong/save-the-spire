import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CardComponent from "./components/CardComponent";
import Basic from "./components/Basic";

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Basic />, document.getElementById('save-edit-content'));
ReactDOM.render(<CardComponent />, document.getElementById('item-content'));
registerServiceWorker();
