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
            const {values} = result;
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

    setHours({spreadsheetId, month, day, project, hours}) {
        console.log("Will save:");
        console.log(`- spreadsheetId: ${spreadsheetId}`);
        console.log(`- month: ${month}`);
        console.log(`- day: ${day}`);
        console.log(`- project: ${project}`);
        console.log(`- hours: ${hours}`);

        return window.gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: month
        }).then((response) => {
            const {result} = response;
            const {values} = result;
            let rowIndex = -1;
            for (let i = 9; i < values.length; i++) {
                if (values[i][0] == project) {
                    rowIndex = i;
                }
            }
            console.log(`rowIndex = ${rowIndex}`);
            return rowIndex;
        }).then((rowIndex) => {
            return window.gapi.client.sheets.spreadsheets.values.update({
                spreadsheetId: spreadsheetId,
                range: `${month}!${columnIndexToA1Notation(day)}${rowIndex + 1}`,
                valueInputOption: 'USER_ENTERED',
            }, {
                values: [[`${hours}`]]
            })
        }).then((response) => {
            console.log('SAVED?!');
            console.log(response)
        }).catch((error) => {
            console.log(error);
        });
    }
}

// TODO This algorithm works for A-ZZ only. It's a crappy code. But it allows us to play with Google Sheets for now to achieve working get and update flows.
function columnIndexToA1Notation(columnIndex) {
    if (columnIndex < 0) throw new Error("columnIndex cannot is negative");
    const a1Characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let left = columnIndex;
    let a1Column = a1Characters[left % a1Characters.length];
    left = (left - (left % a1Characters.length)) / a1Characters.length;
    while (left > 0) {
        a1Column = a1Characters[left % a1Characters.length - 1] + a1Column;
        left = (left - (left % a1Characters.length)) / a1Characters.length;
    }
    return a1Column;
}