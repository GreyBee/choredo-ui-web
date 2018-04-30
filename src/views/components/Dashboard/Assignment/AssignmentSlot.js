import React, {Component} from 'react'
import {DropTarget} from 'react-dnd'
import {grey200, blue400, grey400} from 'material-ui/styles/colors';

const style = {
    height: 110,
    width: '93%',
    color: 'white',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    backgroundColor: grey200,
    borderRadius: 100
};

const dustbinTarget = {
    drop(props, monitor) {
        props.onDrop(monitor.getItem());
        return props;
    }
};

class AssignmentSlot extends Component {

    render() {
        const {
            isOver,
            canDrop,
            connectDropTarget,
            children
        } = this.props;

        const color = blue400;

        const isActive = isOver && canDrop;

        if (isActive) {
            style.backgroundColor = color
        } else if (canDrop) {
            style.backgroundColor = grey400;
            style.border = '1px solid';
            style.borderColor = color;
        } else {
            style.backgroundColor = grey200;
            style.border = null;
            style.borderColor = null;
        }

        return connectDropTarget(
            <div style={{...style}}>
                {children}
            </div>
        )
    }
}

export default DropTarget(props => props.accepts, dustbinTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))(AssignmentSlot)