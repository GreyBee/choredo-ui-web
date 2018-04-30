import React, {Component} from 'react';
import {connect} from 'react-redux'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import {choreSelectors} from '../../store/Chores';
import {childSelectors} from '../../store/Children';
import {assignmentActions, assignmentSelectors} from '../../store/Assignments';
import {Grid} from "react-flexbox-grid";
import AssignableChildren from "../components/Dashboard/Assignment/AssignableChildren";
import HeaderRow from "../components/Dashboard/Assignment/HeaderRow";
import ChoreWeek from "../components/Dashboard/Assignment/ChoreWeek";

class Assignments extends Component {

    render() {
        const {
            children,
            chores,
            assignments,
            deleteAssignment,
            deleteAll,
            deleteAllForChore,
            addAssignment,
            assignForAll,
            collapseAll,
            collapseRow,
            expandRow,
            expandAll,
            expansionState,
        } = this.props;

        const handleAssignment = (chore, day, child) => {
            addAssignment(chore, child.id, day);
        };

        const handleAssignAll = (chore, days, child, overrideExisting = true) => {

            if (overrideExisting) { deleteAllForChore(chore) }

            const availableDays = Object.entries(days)
                .filter(([day, value]) => value)
                .filter(([day]) => {
                    if (overrideExisting) {
                        return true;
                    }

                    return assignments.findIndex((assignment) => {
                        return assignment.chore === chore && assignment.day === day
                    }) === -1;
                }).map(([day, value]) => day)
            ;
            assignForAll(chore, child.id, availableDays);
        };
        const days = [
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
        ];
        return (
            <Grid style={{paddingTop: 20}}>
                <AssignableChildren
                    children={children}
                    deleteAll={deleteAll}
                    collapseAll={collapseAll}
                    expandAll={expandAll}
                />
                <HeaderRow days={days}/>
                {
                    chores.map((chore, index) => {
                            return (
                                <ChoreWeek
                                    key={chore.id}
                                    chore={chore}
                                    index={index}
                                    days={days}
                                    assignments={assignments}
                                    children={children}
                                    deleteAssignment={deleteAssignment}
                                    assignForAll={assignForAll}
                                    onAssignment={handleAssignment}
                                    onAssignAll={handleAssignAll}
                                    expandRow={expandRow}
                                    collapseRow={collapseRow}
                                    expanded={expansionState[index]}
                                />
                            )
                        }
                    )
                }
            </Grid>
        )
    }


}


const mapStateToProps = (state) => {
    return ({
        chores: choreSelectors.getChores(state),
        children: childSelectors.getChildren(state),
        assignments: assignmentSelectors.getAssignments(state),
        expansionState: assignmentSelectors.getRowExpansionState(state),
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        addAssignment: (chore, child, day) => dispatch(assignmentActions.addAssignment(chore, child, day)),
        deleteAssignment: (index) => dispatch(assignmentActions.deleteAssignment(index)),
        assignForAll: (chore, child, days) => dispatch(assignmentActions.assignForAll(chore, child, days)),
        deleteAll: () => dispatch(assignmentActions.deleteAll()),
        deleteAllForChore: (chore) => dispatch(assignmentActions.deleteAllForChore(chore)),
        expandRow: (index) =>  dispatch(assignmentActions.expandRow(index)),
        collapseRow: (index) =>  dispatch(assignmentActions.collapseRow(index)),
        expandAll: () =>  dispatch(assignmentActions.expandAllRows()),
        collapseAll: () =>  dispatch(assignmentActions.collapseAllRows()),
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DragDropContext(HTML5Backend)(Assignments))