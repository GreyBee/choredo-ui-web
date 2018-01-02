import React, {Component} from 'react';
import LandingPage from './views/components/Page/LandingPage';
import Dashboard from './views/components/Page/Dashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {deepOrangeA400, deepPurple600} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ChoreDoApp extends Component {

    render() {

        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: deepPurple600,
                accent1Color: deepOrangeA400,
            },
        });

        let loggedIn = true;

        const route = loggedIn === true ?
            <Route path="/" component={Dashboard}/>
            : <Route path="/" component={LandingPage}/>;

        return (

            <MuiThemeProvider muiTheme={muiTheme}>
                <Router>
                    {route}
                </Router>
            </MuiThemeProvider>
        );

    }
}

export default ChoreDoApp;
