export const actionTypes = {
    LOGIN_WITH_GOOGLE_COMPLETED: "LOGIN_WITH_GOOGLE_COMPLETED",
    SET_TARGET_TIMESHEET: "SET_TARGET_TIMESHEET"
};

export function loginWithGoogleCompleted() {
    return {
        type: actionTypes.LOGIN_WITH_GOOGLE_COMPLETED
    }
}

export function setTargetTimesheet(url) {
    return {
        type: actionTypes.SET_TARGET_TIMESHEET,
        url
    }
}

