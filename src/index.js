import React from 'react';
import {render} from 'react-dom';
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import './index.css';
import ChoreDoApp from './ChoreDoApp';
import registerServiceWorker from './registerServiceWorker';
import childReducer from './store/Children';
import choreReducer, {activeChoreReducer} from './store/Chores';

let store = createStore(
    combineReducers({
        children: childReducer,
        chores: choreReducer,
        activeChore: activeChoreReducer
    }),
    {
        children: [
            {
                name: "Lydia",
                color: '#9900EF'
            },
            {
                name: "Matthew",
                color: "#FF6900"
            },
            {
                name: "Shawn",
                color: "#0693E3"
            }
        ],
        chores: [
            {
                id: 123,
                name: "Take out the trash",
                description: "Trash trash trashity trash",
                value: 100,
                durationMinutes: 10,
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
                    wednesday: false,
                    thursday: false,
                    friday: false,
                    saturday: false,
                }
            }
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
