import React from 'react';
import ReactDOM from 'react-dom';
import WebMidi from 'webmidi';
import App from './App';

const root = document.getElementById('root');

WebMidi.enable((err) => {
	const app = err ? <h1>MIDI not enabled in this browser</h1> : <App />;

	ReactDOM.render(app, root);
});
