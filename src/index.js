import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChoreBoardApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChoreBoardApp />, document.getElementById('root'));
registerServiceWorker();
