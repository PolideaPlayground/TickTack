import './DatePicker-style.css'
import classNames from 'classnames'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DatePickerBar extends Component {
    render() {
        const {date, prevDayCallback, nextDayCallback} = this.props;
        return (
            <div className={classNames("datePickerBar", this.props.className)}>
                <div className="datePickerBar-button datePickerBar-button-left" onClick={prevDayCallback}>{'<'}</div>
                <div className="datePickerBar-date">{date.toDateString()}</div>
                <div className="datePickerBar-button datePickerBar-button-right" onClick={nextDayCallback}>{'>'}</div>
            </div>
        );
    }
}

DatePickerBar.propTypes = {
    date: PropTypes.object.isRequired,
    prevDayCallback : PropTypes.func.isRequired,
    nextDayCallback : PropTypes.func.isRequired
};

export default DatePickerBar;