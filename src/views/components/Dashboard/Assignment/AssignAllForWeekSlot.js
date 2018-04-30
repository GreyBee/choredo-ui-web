import React, {Component} from 'react'
import {DropTarget} from 'react-dnd'
import {grey200, blue400} from 'material-ui/styles/colors';

const style = {
    height: '98%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
};

const dustbinTarget = {
    drop(props, monitor) {
        props.onDrop(monitor.getItem());
        return props;
    }
};

class AssignForAllWeekSlot extends Component {

    render() {
        const {
            isOver,
            canDrop,
            connectDropTarget,
            hoverTitle
        } = this.props;

        const color = blue400;

        const isActive = isOver && canDrop;

        if (isActive) {
            style.backgroundColor = color;
            style.color = 'white';
        } else if (canDrop) {
            style.backgroundColor = grey200;
        } else {
            style.backgroundColor = null;
        }

        return connectDropTarget(
            <div style={{...style}}>
                { isActive && hoverTitle }
            </div>
        )
    }
}

export default DropTarget(props => props.accepts, dustbinTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))(AssignForAllWeekSlot)