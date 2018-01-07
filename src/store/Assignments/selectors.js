function getAssignments(state) {
    return state.assignments || [];
}

function getRowExpansionState(state){
    return state.assignmentRowExpansionState || [];
}

export default {
    getAssignments,
    getRowExpansionState
};