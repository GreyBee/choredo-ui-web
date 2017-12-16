import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
class Dashboard extends Component {

    render() {

        function handleTouchTap() {
            alert('onClick triggered on the title component');
        }

        const styles = {
            title: {
                cursor: 'pointer',
            },
        };

        return (
            <div id="page-wrapper">
                <AppBar
                    title={<span style={styles.title}>ChoreDo</span>}
                    iconElementLeft=""
                />
            </div>
        );
    }
}

export default Dashboard ;
