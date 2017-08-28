import React, {Component} from 'react';
import './TimesheetListEntry-style.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Counter from '../Counter/Counter-component'

class TimesheetListEntry extends Component {
    _onIncrementPress = () => {
        const {onDidSetHours, hours, id} = this.props;
        if (onDidSetHours === undefined){
            return;
        }
        onDidSetHours(id, hours + 1);
    };

    _onDecrementPress = () => {
        const {onDidSetHours, hours, id} = this.props;
        if (onDidSetHours === undefined){
            return;
        }
        if (hours === 0){
            return;
        }
        onDidSetHours(id, hours - 1);
    };

    render() {
        const {name, hours} = this.props;
        return (
            <div className={classNames("timesheetListEntry", this.props.className)}>
                <div className="timesheetListEntry-name">{name}</div>
                <Counter value={hours}
                         onIncrementPress={this._onIncrementPress}
                         onDecrementPress={this._onDecrementPress}/>
            </div>
        );
    }
}

TimesheetListEntry.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    hours: PropTypes.number,
    onDidSetHours: PropTypes.func
};


export default TimesheetListEntry;