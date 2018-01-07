function addAssignment(chore, child, day) {
    return {
        type: 'ADD_ASSIGNMENT',
        payload: {
            chore,
            child,
            day
        }
    }
}

function deleteAssignment(index) {
    return {
        type: 'DELETE_ASSIGNMENT',
        payload: {
            index
        }
    }
}

function deleteAll() {
    return {
        type: 'DELETE_ALL_ASSIGNMENTS',
    }
}

function deleteAllForChore(chore) {
    return {
        type: 'DELETE_ALL_FOR_CHORE',
        payload: {
            chore
        }
    }
}

function assignForAll(chore, child, days) {
    return {
        type: 'ASSIGN_FOR_ALL',
        payload: {
            chore,
            child,
            days
        }
    }
}

function expandRow(index){
    return {
        type: 'EXPAND_ROW',
        payload: {
            index
        }
    }
}

function collapseRow(index){
    return {
        type: 'COLLAPSE_ROW',
        payload: {
            index
        }
    }
}

function expandAllRows(){
    return {
        type: 'EXPAND_ALL_ROWS'
    }
}

function collapseAllRows(){
    return {
        type: 'COLLAPSE_ALL_ROWS'
    }
}

export default {
    addAssignment,
    assignForAll,
    deleteAssignment,
    deleteAllForChore,
    deleteAll,
    expandRow,
    collapseRow,
    expandAllRows,
    collapseAllRows,
}