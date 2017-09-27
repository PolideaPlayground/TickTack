class Project {
    constructor(name) {
        this.name = name
    }

    toString(){
        return this.name
    }
}

export class SheetManager {
    constructor(spreadsheetId, month) {
        this.spreadsheetId = spreadsheetId;
        this.month = month;
        this.sheet = null;
    }

    listProjects(callback) {
        // Help here: https://developers.google.com/sheets/api/quickstart/js
        window.gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: this.spreadsheetId,
            range: this.month,
        }).then((response) => {
            let range = response.result;
            this.sheet = range;
            if (range.values.length >= 9) {
                let projects = [];
                console.log("row", range);
                for (let i = 9; i < range.values.length; i++) {
                    let row = range.values[i];
                    let projectName = row[0];
                    if (projectName != null) {
                        projects.push(new Project(projectName));
                    }
                    // Print columns A and E, which correspond to indices 0 and 4.
                }
                callback(projects)
            } else {
                callback([])
            }
        }, function(response) {
            console.log("Error OH My!! " + response);
        });
    }

    getColumnNumberForDate(date) {
        let month = date.getMonth();
        let day = date.getDay();

    }

    setHours(hours, project, date, callback) {
        if (this.sheet == null) {
            callback(new Error("Input is not a number."));
        }
        window.gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: this.spreadsheetId,
            range: this.month,
        }).then(function(response) {
            let range = response.result;
            if (range.values.length >= 9) {
                var projects = [];
                for (let i = 9; i < range.values.length; i++) {
                    let row = range.values[i];
                    let projectName = row[0];
                    if (projectName != null) {
                        projects.push(new Project(projectName));
                    }
                    // Print columns A and E, which correspond to indices 0 and 4.
                }
                callback(projects)
            } else {
                callback([])
            }
        }, function(response) {
            console.log("Error OH My!! " + response);
        });
    }
}