import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../Header/Header-component'
import TimesheetList from '../TimesheetList/TimesheetList-component'
import {showAddTimesheetEntry, setHoursForProject} from '../../state/App/App-actions'

class TimeOFill extends Component {
    _showAddEntry = () => {
        const {actions} = this.props;
        actions.showAddTimesheetEntry();
    };

    _didSetHoursForItem = (item, hours) => {
        const {actions} = this.props;
        actions.setHoursForProject(item.project, hours);
    };

    render() {
        const {entries} = this.props;
        return (
            <div>
                <Header title="Time-O-Fill"
                        addActionCallback={this._showAddEntry}/>
                <TimesheetList items={entries}
                               onDidSetHoursForItem={this._didSetHoursForItem}/>
            </div>
        )
    }
}

export default connect(state => ({
        entries: state.fill
    }),
    (dispatch) => ({
        actions: bindActionCreators({showAddTimesheetEntry, setHoursForProject}, dispatch)
    })
)(TimeOFill);