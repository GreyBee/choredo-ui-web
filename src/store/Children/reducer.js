export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_CHILD':
            return [...state,
                {
                    name: '',
                    color: undefined
                }
            ];
        case 'UPDATE_CHILD_NAME': {
            const {payload: {index, name}} = action;
            const child = {
                ...state[index],
                name: name
            };
            return [
                ...state.slice(0, index),
                child,
                ...state.slice(index + 1)
            ];
        }
        case 'UPDATE_CHILD_COLOR':
            return Object.assign([], state, {
                [action.payload.index]: {
                    ...state[action.payload.index],
                    color: action.payload.color
                }
            });
        default:
            return state
    }
};