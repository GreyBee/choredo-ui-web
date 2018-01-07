import React from 'react';
import {Col, Row} from "react-flexbox-grid";
import AssignmentSlot from "../AssignmentSlot";
import AssignmentIndicator from "../AssigmentIndicator";
import AssignAllForWeekSlot from "../AssignAllForWeekSlot";
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import {IconButton} from "material-ui";


const ExpandedWeek = (props) => {
    const {
        chore,
        index,
        days,
        assignments,
        children,
        deleteAssignment,
        onAssignment,
        onAssignAll,
        collapseRow
    } = props;
    const {id, name, frequency, customSchedule} = chore;

    return (
        <Row between="xs" middle="xs" style={{alignItems: 'stretch'}}>
            <Col xs={2}>
                <div style={{
                    backgroundColor: 'white',
                    height: '98%',
                    alignItems: 'center',
                    display: 'flex',
                    width: '100%'
                }}>
                    <IconButton
                        disableTouchRipple
                        onClick={() => collapseRow(index)}
                    >
                        <ExpandLess/>
                    </IconButton>
                    {name}
                </div>
                <Row style={{alignItems: 'stretch'}}>
                    <Col xs={6} style={{marginTop: '-75%', padding: 0}}>
                        <AssignAllForWeekSlot
                            accepts={['child']}
                            hoverTitle={'All?'}
                            onDrop={item => onAssignAll(id, customSchedule, item)}
                        />
                    </Col>
                    <Col xs={6} style={{marginTop: '-75%', padding: 0}}>
                        <AssignAllForWeekSlot
                            accepts={['child']}
                            hoverTitle={'Open?'}
                            onDrop={item => onAssignAll(id, customSchedule, item, false)}
                        />
                    </Col>
                </Row>
            </Col>
            {
                days.map((day) => {
                    const selectedAssignment = assignments.find(element => {
                        return element.day === day && element.chore === id
                    });

                    const assignedChild = selectedAssignment && children.find(child => (child.id === selectedAssignment.child));

                    const isDroppable = (frequency, customSchedule, day) => {
                        return !assignedChild && (frequency === 'daily' || !!customSchedule[day]);
                    };

                    const assignmentIndicator = assignedChild && <AssignmentIndicator
                        id={id}
                        color={assignedChild.color}
                        name={assignedChild.name}
                        onClick={() => {
                            deleteAssignment(
                                assignments.findIndex((needle) => {
                                    return JSON.stringify(needle) === JSON.stringify(selectedAssignment);
                                })
                            )
                        }}
                    />;

                    return (
                        <Col xs key={chore.id + ':' + day}>
                            <div style={{overflow: 'hidden', clear: 'both', padding: '1em 0'}}>
                                <AssignmentSlot
                                    accepts={isDroppable(frequency, customSchedule, day) ? ['child'] : []}
                                    onDrop={item => onAssignment(id, day, item)}
                                    key={id + ':' + index}
                                >
                                    {assignmentIndicator}
                                </AssignmentSlot>
                            </div>
                        </Col>
                    )
                })}
        </Row>
    );
}

export default ExpandedWeek;