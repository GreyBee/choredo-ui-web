function addChore() {
    return {
        type: 'ADD_CHORE'
    }
}

function cancelChoreEdit() {
    return {
        type: 'CANCEL_CHORE_EDIT'
    }
}

function createChore(chore) {
    return {
        type: 'CREATE_CHORE',
        payload: {
            chore
        }
    }
}

function editChore(index, chore){
    return {
        type: 'EDIT_CHORE',
        payload: {
            index,
            chore
        }
    }
}

function updateChore(index, chore) {
    return {
        type: 'UPDATE_CHORE',
        payload: {
            index,
            chore,
        }
    }
}

export default {
    addChore,
    updateChore,
    createChore,
    editChore,
    cancelChoreEdit,
}