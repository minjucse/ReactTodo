import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloMessage from './App';
import TodoApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloMessage name="Taylor" />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<TodoApp name="Taylor" />, document.getElementById('root'));
registerServiceWorker();
