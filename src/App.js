import React, {Component} from 'react';
import Main from './Component/Page/LandingPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div className="App">
                        <Route exact={true} path="/" component={Main}/>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
