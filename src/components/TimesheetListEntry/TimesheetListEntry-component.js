import React, {Component} from 'react';
import './TimesheetListEntry-style.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Counter from '../Counter/Counter-component'

class TimesheetListEntry extends Component {
    render() {
        const {name, hours} = this.props;
        return (
            <div className={classNames("timesheetListEntry", this.props.className)}>
                <div className="timesheetListEntry-name">{name}</div>
                <Counter value={hours}/>
            </div>
        );
    }
}

TimesheetListEntry.propTypes = {
    name: PropTypes.string,
    hours: PropTypes.number
};


export default TimesheetListEntry;