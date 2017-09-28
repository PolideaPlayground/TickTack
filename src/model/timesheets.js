class Project {
    constructor(name) {
        this.name = name
    }

    toString() {
        return this.name
    }
}

export class SheetManager {

    listProjects = ({spreadsheetId, month}) => {
        return window.gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: month,
        }).then((response) => {
            console.log(response);
            const {result} = response;
            const {range, values} = result;
            const projectNames = [];
            for (let i = 9; i < values.length; i++) {
                const row = values[i];
                const projectName = row[0];
                if (!!projectName) {
                    projectNames.push(projectName);
                }
            }
            return projectNames;
        }).catch((error) => {
            console.log(error);
        });
    };

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
        }).then(function (response) {
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
        }, function (response) {
            console.log("Error OH My!! " + response);
        });
    }
}