import React, {Component} from 'react';

import Header from '../Header/Header-component'
import TimesheetList from '../TimesheetList/TimesheetList-component'

class TimeOFill extends Component {
    _addEntry = (project) => {
        console.log("abc");
    };

    render() {
        return (
            <div>
                <Header title="Time-O-Fill" addActionCallback={this._addEntry}/>
                <TimesheetList items={[
                    {
                        id: 0,
                        name: "Entry 1",
                        hours: 3
                    },
                    {
                        id: 1,
                        name: "Entry 2",
                        hours: 9
                    },
                    {
                        id: 1,
                        name: "Entry 3",
                        hours: 9
                    }
                ]}/>
            </div>
        )
    }
}

export default TimeOFill;
