import React, {Component} from 'react'
import {Avatar} from "material-ui";
import Cancel from 'material-ui/svg-icons/action/delete-forever';


class AssignmentIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false
        }
    }

    render() {
        const {id, color, name, onClick} = this.props;
        const { hovering } = this.state;

        const avatar = hovering ? <Avatar
            backgroundColor={color}
            size={110}
            key={id}
        >
            <Cancel color={'white'}/>
        </Avatar> :<Avatar
            backgroundColor={color}
            size={110}
            key={id}
        >
            {name.charAt(0).toUpperCase()}
        </Avatar>;
        return <a
            style={{cursor: 'pointer'}}
            onMouseEnter={() => {
                this.setState({hovering: true});
            }}
            onMouseLeave={() => {
                this.setState({hovering: false});
            }}
            onClick={() => onClick()}
        >
            {avatar}
        </a>
    }
}

export default AssignmentIndicator;
