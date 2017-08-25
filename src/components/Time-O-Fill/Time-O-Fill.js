import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../Header/Header-component'
import TimesheetList from '../TimesheetList/TimesheetList-component'
import {showAddTimesheetEntry} from '../../state/App/App-actions'

class TimeOFill extends Component {
    _showAddEntry = () => {
        const {actions} = this.props;
        actions.showAddTimesheetEntry();
    };

    render() {
        const {entries} = this.props;
        return (
            <div>
                <Header title="Time-O-Fill" addActionCallback={this._showAddEntry}/>
                <TimesheetList items={entries}/>
            </div>
        )
    }
}

export default connect(state => ({
        entries: state.fill
    }),
    (dispatch) => ({
        actions: bindActionCreators({showAddTimesheetEntry}, dispatch)
    })
)(TimeOFill);