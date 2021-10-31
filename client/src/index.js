import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const runApp = () => {
    ReactDOM.render(
	<App />,
	document.getElementById('main')
    );
}

runApp()
