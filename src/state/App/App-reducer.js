import {actionTypes} from './App-actions';

export const navigationStates = {
    LOGIN: "LOGIN",
    SETUP_TIMESHEET: "SETUP_TIMESHEET",
    FILL: "FILL",
    ADD_PROJECT: "ADD_PROJECT"
};

const initialState = {
    navigation: navigationStates.FILL,
    fill: [

    ],
    projects: [
        {
            id: 0,
            name: "Entry 1"
        },
        {
            id: 1,
            name: "Entry 2"
        },
        {
            id: 2,
            name: "Entry 3"
        },
        {
            id: 3,
            name: "Entry 4"
        }
    ]
};

export default function appReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.SHOW_ADD_TIMESHEET_ENTRY:
            return {
                ...state,
                navigation: navigationStates.ADD_PROJECT
            };
        case actionTypes.ADD_TIMESHEET_ENTRY:
            const toBeAddedProject = action.project;
            if (state.fill.find((item) => {return item.project.id === toBeAddedProject.id}) === undefined) {
                return {
                    ...state,
                    navigation: navigationStates.FILL,
                    fill: [...state.fill, {project: toBeAddedProject, hours: 1}]
                }
            } else {
                return {
                    ...state,
                    navigation: navigationStates.FILL
                }
            }
        default:
            return state;
    }
}