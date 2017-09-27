export const actionTypes = {
    LOGIN_WITH_GOOGLE_COMPLETED: "LOGIN_WITH_GOOGLE_COMPLETED",
    CHANGE_DATE: "CHANGE_DATE",
    SHOW_ADD_TIMESHEET_ENTRY: "SHOW_ADD_TIMESHEET_ENTRY",
    ADD_TIMESHEET_ENTRY: "ADD_TIMESHEET_ENTRY",
    SET_HOURS_FOR_PROJECT: "SET_HOURS_FOR_PROJECT"
};

export function loginWithGoogleCompleted(projects) {
    return {
        type: actionTypes.LOGIN_WITH_GOOGLE_COMPLETED,
        projects
    }
}

export function changeDate(date) {
    return {
        type: actionTypes.CHANGE_DATE,
        date
    }
}

export function showAddTimesheetEntry() {
    return {
        type: actionTypes.SHOW_ADD_TIMESHEET_ENTRY
    }
}

export function addTimesheetEntry(project) {
    return {
        type: actionTypes.ADD_TIMESHEET_ENTRY,
        project
    }
}

export function setHoursForProject(project, hours) {
    return {
        type: actionTypes.SET_HOURS_FOR_PROJECT,
        project,
        hours
    }
}