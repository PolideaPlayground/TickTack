import {actionTypes} from './Setup-actions';

const initialState = {
    isLoggedIn: false,
    spreadsheetId: null,
    error: null
};

export function isSetupDone(state) {
    return state.isLoggedIn && state.spreadsheetId !== null && state.spreadsheetId.length > 0;
}

export default function appReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.LOGIN_WITH_GOOGLE_COMPLETED:
            return {...state, isLoggedIn: true};
        case actionTypes.SET_TARGET_TIMESHEET:
            // example: https://docs.google.com/spreadsheets/d/12QJplmOB6Xqj0FGTCRoOH-LzRv1CfmZ6zlnz6IzzFRk/edit#gid=303667354
            let re = /^(?:https:\/\/docs\.google\.com\/spreadsheets\/d\/)([_0-9A-Za-z-]*)/;
            let ret = action.url.match(re);
            if (ret === null || ret.length !== 2) {
                return {...state, error: "Invalid spreadsheets URL"};
            } else {
                return {
                    ...state,
                    spreadsheetId: ret[1],
                    error: null
                };
            }
        default:
            return state;
    }
}