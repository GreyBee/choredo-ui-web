export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_CHORE':{
            const {payload: { chore } } = action;

            return [
                ...state,
                {
                    ...chore,
                    id: Math.random()
                }
            ];
        }
        case 'UPDATE_CHORE': {
            const { payload: { chore } } = action;


            const index = state.findIndex((element) => (element.id === chore.id));

            return [
                ...state.slice(0, index),
                {
                    ...chore
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
                activeChore: {
                    id: null,
                    name: null,
                    description: null,
                    value: 0,
                    frequency: 'daily',
                    customSchedule: {
                        sunday: false,
                        monday: false,
                        tuesday: false,
                        wednesday: false,
                        thursday: false,
                        friday: false,
                        saturday: false,
                    }
                }
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