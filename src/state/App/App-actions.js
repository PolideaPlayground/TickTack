export const actionTypes = {
    SHOW_ADD_TIMESHEET_ENTRY: "SHOW_ADD_TIMESHEET_ENTRY",
    ADD_TIMESHEET_ENTRY: "ADD_TIMESHEET_ENTRY"
};

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