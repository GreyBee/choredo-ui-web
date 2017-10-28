import React, {Component} from 'react';
import LandingPage from './Component/Page/LandingPage';
import Dashboard from './Component/Page/Dashboard';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class ChoreDoApp extends Component {

    render() {

        let loggedIn = localStorage.getItem('cd-user-name')
            && localStorage.getItem('cd-user-email')
            && localStorage.getItem('cd-user-token');

        return (
            <div>
                <Router>
                <Route exact path="/" render={() => (
                    loggedIn ? (
                        <Dashboard/>
                    ) : (
                        <LandingPage/>
                    )
                )}/>
                </Router>
            </div>
        );
    }
}

export default ChoreDoApp;
