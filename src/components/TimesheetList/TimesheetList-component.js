import React, {Component} from 'react';
import './TimesheetList-style.css'
import PropTypes from 'prop-types'

import TimesheetListEntry from '../TimesheetListEntry/TimesheetListEntry-component'

class TimesheetList extends Component {

    _listItems = (items) => {
        return items.map((item) => {
            const {project, hours} = item;
            const {id, name} = project;
            return <TimesheetListEntry key={id} className="timesheetList-row" name={name} hours={hours}/>
        })
    };

    render() {
        const {items} = this.props;
        return (
            <div className="timesheetList">
                {this._listItems(items)}
            </div>
        );
    }
}

TimesheetList.propTypes = {
    items: PropTypes.array
};

export default TimesheetList;