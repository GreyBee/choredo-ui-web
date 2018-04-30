import React, {Component} from 'react'
import {DragSource} from 'react-dnd'
import {Chip} from "material-ui";

const boxSource = {
    beginDrag(props) {
        return {
            ...props.child
        }
    }
};



class AssignableChild extends Component {

    render() {
        const { child: {name, color}, connectDragSource } = this.props;

        return connectDragSource(
            <a>
                <Chip style={{display: 'inline-block', margin: '0 10px'}} backgroundColor={color} labelColor={'white'}>
                    {name}
                </Chip>
            </a>
        )
    }
}

export default DragSource(props => props.type, boxSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))(AssignableChild)
