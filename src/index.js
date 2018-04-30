import React from 'react';
import {render} from 'react-dom';
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import './index.css';
import ChoreDoApp from './ChoreDoApp';
import registerServiceWorker from './registerServiceWorker';
import childReducer from './store/Children';
import assignmentReducer, {expansionReducer} from './store/Assignments';
import choreReducer, {activeChoreReducer} from './store/Chores';

let store = createStore(
    combineReducers({
        children: childReducer,
        chores: choreReducer,
        activeChore: activeChoreReducer,
        assignments: assignmentReducer,
        assignmentRowExpansionState: expansionReducer,
    }),
    {
        children: [
            {
                id: 123,
                name: "Lydia",
                color: '#9900EF'
            },
            {
                id: 234,
                name: "Matthew",
                color: "#FF6900"
            },
            {
                id: 456,
                name: "Shawn",
                color: "#0693E3"
            }
        ],
        chores: [
            {
                id: 123,
                name: "Trash",
                description: "Trash trash trashity trash",
                value: 100,
                frequency: 'daily',
                customSchedule: {
                    sunday: true,
                    monday: true,
                    tuesday: true,
                    wednesday: true,
                    thursday: true,
                    friday: true,
                    saturday: true,
                }
            },
            {
                id: 456,
                name: "Dishes",
                description: "Wash wash washity wash",
                value: 100,
                durationMinutes: 30,
                frequency: 'custom',
                customSchedule: {
                    sunday: false,
                    monday: true,
                    tuesday: false,
                    wednesday: true,
                    thursday: false,
                    friday: true,
                    saturday: false,
                }
            },
            {
                id: 678,
                name: "Bathroom",
                description: "It's nasty, I know",
                value: 100,
                durationMinutes: 30,
                frequency: 'weekly',
                customSchedule: {
                    sunday: false,
                    monday: false,
                    tuesday: false,
                    wednesday: true,
                    thursday: false,
                    friday: false,
                    saturday: false,
                }
            }
        ],
        assignmentRowExpansionState: [
            true,
            false,
            true,
        ],
        assignments: [
            {
                child: 123,
                chore: 123,
                day: 'monday'
            },
            {
                child: 234,
                chore: 456,
                day: 'wednesday'
            },
            {
                child: 456,
                chore: 678,
                day: 'wednesday'
            },
        ],
        activeChore: {
            isEditing: false,
            activeChore: {}
        }
    },
    composeWithDevTools()
);

render(
    <Provider store={store}>
        <ChoreDoApp/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
