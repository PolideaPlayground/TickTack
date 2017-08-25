import React, {Component} from 'react';

import Header from './../Header/Header-component'
import TimesheetList from '../TimesheetList/TimesheetList-component'

class TimeOFill extends Component {
    render() {
        return (
            <div>
                <Header/>
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
                        name: "Entry 2",
                        hours: 9
                    }
                ]}/>
            </div>
        )
    }
}

export default TimeOFill;
