import React, {Component} from 'react';
import './TimesheetList-style.css'
import PropTypes from 'prop-types'

import TimesheetListEntry from '../TimesheetListEntry/TimesheetListEntry-component'

class TimesheetList extends Component {

    _onDidSetHoursForKey = (key, hours) => {
        const {onDidSetHoursForItem, items} = this.props;
        if (onDidSetHoursForItem === undefined){
            return;
        }
        const item = items.find((it) => {
            return it.project.id === key;
        });
        if (item === undefined){
            return;
        }
        onDidSetHoursForItem(item, hours);
    };

    _listItems = (items) => {
        return items.map((item) => {
            const {project, hours} = item;
            const {id, name} = project;
            return <TimesheetListEntry key={id}
                                       id={id}
                                       className="timesheetList-row"
                                       name={name}
                                       hours={hours}
                                       onDidSetHours={this._onDidSetHoursForKey}/>
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
    items: PropTypes.array,
    onDidSetHoursForItem: PropTypes.func
};

export default TimesheetList;