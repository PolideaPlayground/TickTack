import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './TimesheetFill-style.css'

import Header from '../Header/Header-component'
import DatePickerBar from '../DatePickerBar/DatePicker-component'
import TimesheetList from '../TimesheetList/TimesheetList-component'
import {changeDate, showAddTimesheetEntry, setHoursForProject} from '../../state/App/App-actions'

class TimesheetFill extends Component {
    _showAddEntry = () => {
        const {actions} = this.props;
        actions.showAddTimesheetEntry();
    };

    _didSetHoursForItem = (item, hours) => {
        const {actions} = this.props;
        actions.setHoursForProject(item.project, hours);
    };

    _datePickerPrevDayButtonPressed = () => {
        const {actions, timesheet} = this.props;
        const newDate = new Date(timesheet.date.getTime() - 24 * 60 * 60 * 1000);
        actions.changeDate(newDate);
    };

    _datePickerNextDayButtonPressed = () => {
        const {actions, timesheet} = this.props;
        const newDate = new Date(timesheet.date.getTime() + 24 * 60 * 60 * 1000);
        actions.changeDate(newDate);
    };

    render() {
        const {timesheet} = this.props;
        return (
            <div className="timesheetFill">
                <Header className="timesheetFill-header"
                        title="Timesheet"
                        addActionCallback={this._showAddEntry}/>
                <DatePickerBar className="timesheetFill-dateBar"
                               date={timesheet.date}
                               prevDayCallback={this._datePickerPrevDayButtonPressed}
                               nextDayCallback={this._datePickerNextDayButtonPressed}/>
                <TimesheetList className="timesheetFill-list"
                               items={timesheet.entries}
                               onDidSetHoursForItem={this._didSetHoursForItem}/>
            </div>
        )
    }
}

export default connect(state => ({
        timesheet: state.timesheet
    }),
    (dispatch) => ({
        actions: bindActionCreators({changeDate, showAddTimesheetEntry, setHoursForProject}, dispatch)
    })
)(TimesheetFill);