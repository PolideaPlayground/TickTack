import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './Home-style.css'
import {Link} from 'react-router-dom'

import Header from '../Header/Header-component'
import DatePickerBar from '../DatePickerBar/DatePicker-component'
import TimesheetList from '../TimesheetList/TimesheetList-component'
import {changeDate, showAddTimesheetEntry, setHoursForProject} from '../../model/App/App-actions'

class Home extends Component {
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
            <div className="home">
                <Link to="/setup/login">Link</Link>
                {/*<Header className="home-header"*/}
                {/*title="Timesheet"*/}
                {/*addActionCallback={this._showAddEntry}/>*/}
                {/*<DatePickerBar className="home-datePicker"*/}
                {/*date={timesheet.date}*/}
                {/*prevDayCallback={this._datePickerPrevDayButtonPressed}*/}
                {/*nextDayCallback={this._datePickerNextDayButtonPressed}/>*/}
                {/*<TimesheetList className="home-list"*/}
                {/*items={timesheet.entries}*/}
                {/*onDidSetHoursForItem={this._didSetHoursForItem}/>*/}
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
)(Home);