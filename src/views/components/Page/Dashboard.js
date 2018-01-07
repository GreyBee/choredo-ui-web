import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import NavDrawer from '../NavDrawer';
import {Route, Redirect} from 'react-router-dom'
import {Grid, Row, Col} from 'react-flexbox-grid';
import ChildGrid from "../../containers/ChildGrid";
import ChoreGrid from "../../containers/ChoreGrid";
import Assignments from "../../containers/Assignments";
import Page from "../Dashboard/Page";


class Dashboard extends Component {

    render() {
        const {location} = this.props;

        return (
            <div id="page-wrapper">
                <AppBar
                    title={<span>ChoreDo</span>}
                    showMenuIconButton={false}
                    style={{position: 'fixed', top: 0}}
                />
                <Grid fluid style={{paddingTop: "60px"}}>
                    <Row>
                        <Col md={2}>
                            <NavDrawer location={location}/>
                        </Col>
                        <Col md={10}>
                            <Route exact path="/" component={() => (<Redirect to="/schedule"/>)}/>
                            <Route exact path="/schedule"
                                   component={() => (<div><h1>Schedule</h1></div>)}/>
                            <Route exact path="/assignments"
                                   render={() => (<Page title={"Assignments"} component={<Assignments/>}/>)}/>
                            <Route exact path="/children"
                                   render={() => (<Page title={"Children"} component={<ChildGrid/>}/>)}/>
                            <Route exact path="/chores"
                                   render={() => (<Page title={"Chores"} component={<ChoreGrid/>}/>)}/>
                            <Route exact path="/settings" component={() => (<div><h1>Settings</h1></div>)}/>
                            <Route exact path="/account" component={() => (<div><h1>Account</h1></div>)}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
