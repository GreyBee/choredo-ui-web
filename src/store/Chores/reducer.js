export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_CHORE':
            return [
                ...state,
                action.payload.chore
            ];
        case 'UPDATE_CHORE': {
            const {payload: {index, chore}} = action;
            return [
                ...state.slice(0, index),
                {
                    ...chore,
                    id: Math.random()
                },
                ...state.slice(index + 1)
            ];
        }
        default:
            return state
    }
};

export const activeChore = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CHORE':
            return {
                isEditing: true,
                activeChore: undefined
            };
        case 'CANCEL_CHORE_EDIT':
            return {
                isEditing: false,
                activeChore: {}
            };
        case 'EDIT_CHORE':
            return {
                isEditing: true,
                activeChore: action.payload.chore
            };
        default:
            return state;
    }
};