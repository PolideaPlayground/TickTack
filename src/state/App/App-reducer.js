import {actionTypes} from './App-actions';

export const navigationStates = {
    LOGIN: "LOGIN",
    SETUP_TIMESHEET: "SETUP_TIMESHEET",
    FILL: "FILL",
    ADD_PROJECT: "ADD_PROJECT"
};

const initialState = {
    navigation: navigationStates.LOGIN,
    fill: [],
    projects: []
};

export default function appReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.LOGIN_WITH_GOOGLE_COMPLETED:
            return {
                ...state,
                navigation: navigationStates.FILL,
                projects: action.projects
            };
        case actionTypes.SHOW_ADD_TIMESHEET_ENTRY:
            return {
                ...state,
                navigation: navigationStates.ADD_PROJECT
            };
        case actionTypes.ADD_TIMESHEET_ENTRY:
            const toBeAddedProject = action.project;
            if (state.fill.find((item) => {
                    return item.project.id === toBeAddedProject.id
                }) === undefined) {
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
        case actionTypes.SET_HOURS_FOR_PROJECT:
            const toBeSetProject = action.project;
            const hours = action.hours;
            return {
                ...state,
                fill: state.fill.map((item) => {
                    return item.project.id === toBeSetProject.id ? {...item, hours: hours} : item;
                })
            };
        default:
            return state;
    }
}