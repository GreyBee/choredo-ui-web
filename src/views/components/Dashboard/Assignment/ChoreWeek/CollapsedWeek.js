import React from 'react';
import {Col, Row} from "react-flexbox-grid";
import {grey200} from 'material-ui/styles/colors';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import {IconButton} from "material-ui";

const CollapsedWeek = ({index, chore, days, assignments, children, expandRow}) => {
    const {id, name} = chore;
    return (
        <Row between="xs" middle="xs" style={{alignItems: 'stretch'}}>
            <Col xs={2} style={{
                alignItems: 'center',
                display: 'flex'
            }}>

                <IconButton
                    disableTouchRipple
                    onClick={() => expandRow(index)}
                >
                    <ExpandMore/>
                </IconButton>
                {name}
            </Col>
            {
                days.map((day) => {
                    const selectedAssignment = assignments.find(element => {
                        return element.day === day && element.chore === id
                    });
                    const assignedChild = selectedAssignment && children.find(child => (child.id === selectedAssignment.child));
                    const color = (assignedChild && assignedChild.color) || grey200;
                    return (
                        <Col xs key={chore.id + ':' + day}>
                            <div style={{
                                overflow: 'hidden',
                                clear: 'both',
                                padding: '1em 0',
                                borderTop: '5px solid ' + color
                            }}>
                            </div>
                        </Col>
                    )
                })}
        </Row>
    );
};

export default CollapsedWeek;