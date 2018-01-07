import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import AssignmentsIcon from 'material-ui/svg-icons/notification/event-available';
import ScheduleIcon from 'material-ui/svg-icons/action/today';
import ChoresIcon from 'material-ui/svg-icons/action/check-circle';
import ChildIcon from 'material-ui/svg-icons/action/face';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import Settings from 'material-ui/svg-icons/action/settings';
import {NavLink as Link} from 'react-router-dom';


class NavDrawer extends Component {

    render() {
        const renderLink = (url, icon, title) => {
            return (
                <Link to={url} activeClassName={'active'} style={{textDecoration:'none'}}>
                    <MenuItem primaryText={title} leftIcon={icon}/>
                </Link>

            )
        };

        return (
            <Drawer open={true} width={230}>
                <AppBar
                    title={<span>ChoreDo</span>}
                    showMenuIconButton={false}
                />
                {renderLink("/assignments", <AssignmentsIcon/>, 'Assignments')}
                {renderLink("/schedule", <ScheduleIcon/>, 'Schedule')}
                {renderLink("/children", <ChildIcon/>, 'Children')}
                {renderLink("/chores", <ChoresIcon/>, 'Chores')}
                <Divider/>
                {renderLink("/settings", <Settings/>, 'Settings')}
                {renderLink("/account", <AccountIcon/>, 'Account')}
            </Drawer>
        );
    }
}

export default NavDrawer;
