import React, {Component} from 'react';
import LandingPage from './Component/Page/LandingPage';
import Dashboard from './Component/Page/Dashboard';
import SetupFamily from './Component/Onboarding/OnboardingModal';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {deepOrangeA400, deepPurple600} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ChoreDoApp extends Component {

    render() {

        let loggedIn = false;

        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: deepPurple600,
                accent1Color: deepOrangeA400,
            },
        });

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router>
                    <Switch>
                        <Route exact path="/" render={() => (
                            loggedIn ? (
                                <Dashboard/>
                            ) : (
                                <LandingPage/>
                            )
                        )}/>
                        <Route path="/signup" component={SetupFamily}/>
                        <Route path="/dashboard" component={Dashboard}/>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default ChoreDoApp;
