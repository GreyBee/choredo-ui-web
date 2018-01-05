function addChild() {
    return {
        type: 'ADD_CHILD'
    }
}

function updateChildColor(index, color){
    return {
        type: 'UPDATE_CHILD_COLOR',
        payload: {
            index,
            color,
        }
    }
}

function updateChildName(index, name){
    return {
        type: 'UPDATE_CHILD_NAME',
        payload: {
            index,
            name,
        }
    }
}

export default {
    addChild,
    updateChildColor,
    updateChildName
}