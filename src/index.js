import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChoreDoApp from './ChoreDoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChoreDoApp />, document.getElementById('root'));
registerServiceWorker();
