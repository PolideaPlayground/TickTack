import React, {Component} from 'react';
import './TimesheetList-style.css'
import PropTypes from 'prop-types'

import TimesheetListEntry from '../TimesheetListEntry/TimesheetListEntry-component'

class TimesheetList extends Component {
    render() {
        return (
            <div className="timesheetList">
                <TimesheetListEntry className="timesheetList-row" name="Entry1" hours={8}/>
                <TimesheetListEntry className="timesheetList-row" name="Entry2" hours={4}/>
            </div>
        );
    }
}

TimesheetList.propTypes = {

};

export default TimesheetList;