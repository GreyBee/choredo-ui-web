import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import NavDrawer from '../NavDrawer';
import {Route, Redirect} from 'react-router-dom'
import Chores from './Dashboard/Chores';
import Children from './Dashboard/Children';
import {Grid, Row, Col} from 'react-flexbox-grid';


class Dashboard extends Component {

    render() {
        const {location} = this.props;

        return (
            <div id="page-wrapper">
                <AppBar
                    title={<span>ChoreDo</span>}
                    showMenuIconButton={false}
                    style={{position:'fixed', top:0}}
                />
                <Grid fluid style={{paddingTop:"60px"}}>
                    <Row>
                        <Col md={2}>
                            <NavDrawer location={location}/>
                        </Col>
                        <Col md={10}>
                            <Route exact path="/" component={() => (<Redirect to="/schedule"/>)}/>
                            <Route exact={true} path="/schedule" component={() => (<div><h1>Schedule</h1></div>)}/>
                            <Route exact={true} path="/children" component={Children}/>
                            <Route path="/chores" component={Chores}/>
                            <Route exact={true} path="/settings" component={() => (<div><h1>Settings</h1></div>)}/>
                            <Route exact={true} path="/account" component={() => (<div><h1>Account</h1></div>)}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
