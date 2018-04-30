export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_ASSIGNMENT': {
            const {payload: {child, chore, day}} = action;
            return [...state,
                {
                    child,
                    chore,
                    day
                }
            ];
        }
        case 'DELETE_ASSIGNMENT': {
            const {payload: {index}} = action;
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        }
        case 'DELETE_ALL_FOR_CHORE': {
            const {payload: {chore}} = action;
            return [
                ...state.filter((assignment) => {
                return assignment.chore !== chore;
                })
            ];
        }
        case 'DELETE_ALL_ASSIGNMENTS': {
            return [

            ];
        }
        case 'ASSIGN_FOR_ALL': {
            const {payload: {child, chore, days}} = action;
            return [
                ...state,
                ...days.map((day) => (
                    {
                        child,
                        chore,
                        day
                    }
                ))
            ];
        }
        default:
            return state
    }
};

export const rowExpansion = (state = [], action) => {
    switch(action.type) {
        case 'EXPAND_ROW': {
            const {payload: {index}} = action;
            return [
                ...state.slice(0, index),
                true,
                ...state.slice(index + 1)
            ];
        }
        case 'COLLAPSE_ROW': {
            const {payload: {index}} = action;
            return [
                ...state.slice(0, index),
                false,
                ...state.slice(index + 1)
            ];
        }
        case 'EXPAND_ALL_ROWS': {
            return state.map(() => true);
        }
        case 'COLLAPSE_ALL_ROWS': {
            return state.map(() => false);
        }
        default:
            return state
    }
};