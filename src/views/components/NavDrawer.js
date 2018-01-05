import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import ActionPermContactCalendar from 'material-ui/svg-icons/action/perm-contact-calendar';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionAccount from 'material-ui/svg-icons/action/account-circle';
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
                {renderLink("/schedule", <ActionPermContactCalendar/>, 'Schedule')}
                {renderLink("/children", <ActionFace/>, 'Children')}
                {renderLink("/chores", <ActionCheckCircle/>, 'Chores')}
                <Divider/>
                {renderLink("/settings", <Settings/>, 'Settings')}
                {renderLink("/account", <ActionAccount/>, 'Account')}
            </Drawer>
        );
    }
}

export default NavDrawer;
